import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, IconButton, Input, RegisterBack, UserLogs } from '../../Components';
import { SignUp } from '../../Functions';

export const Register = ({ navigation: { goBack, navigate }, setData }) => {

    const [email, setEmail] = useState(),
        [number, setNumber] = useState(),
        [password, setPassword] = useState(),
        [checked, setChecked] = useState(false),
        [count, setCount] = useState(0),
        [modal, setModal] = useState(false),
        [message, setMessage] = useState(null),
        [fname, setFname] = useState(null),
        [mname, setMname] = useState(null),
        [lname, setLname] = useState(null),
        Navigate = () => {
            email ? (
                password ? (
                    checked ? (
                        count > 1 ? (setMessage("Fix your password please"), setModal(true) ): setCount(count + 1)
                    ) : (
                        SignUp(email,password, fname, mname, lname, number),
                        navigate('setprofile')
                    )
                ) : setMessage("Please enter password"), setModal(true)
            ) : setMessage("Please enter email address"), setModal(true)
        };

    useEffect(() => {
        checked !== password ? null : setChecked(false)
    }, [checked])

    return (
        <RegisterBack>
            <View style={styles.back}>
                <IconButton type="back" color="#fff" Func={goBack} />
            </View>
            <View style={styles.headingPosition}>
                <Text style={styles.heading}>Sign up and Relax</Text>
            </View>
            <View style={styles.inputs}>
                <Input proxy="Email" margin={15} Note={setEmail} />
                <Input proxy="Firstname" margin={15} Note={setFname}/>
                <Input proxy="Middle Name" margin={15} Note={setMname}/>
                <Input proxy="Lastname" margin={15} Note={setLname}/>
                <Input proxy="Phonenumber" margin={15} Note={setNumber} />
                <Input proxy="Password" margin={15} privacy Note={setPassword} />
                <Input proxy="Confirm Password" margin={15} privacy Note={setChecked} />
                {checked ? <Text style={styles.warning}>Warning: Password does not match</Text> : null}
                <Button text="Next" Action={Navigate} />
            </View>
            
        </RegisterBack>
    )
}

const styles = StyleSheet.create({
    back: {
        top: 25,
        left: -140
    },
    headingPosition: {
        top: 45
    },
    heading: {
        // fontFamily: 'Italiana-Regular',
        fontSize: 25,
        color: '#fff',
    },
    inputs: {
        width: '100%',
        alignItems: 'center',
        top: 105,
        height: 'auto'
    },
    warning: {
        fontSize: 15,
        color: '#fff'
    }
})