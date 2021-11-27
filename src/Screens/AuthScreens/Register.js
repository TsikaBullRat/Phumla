import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, IconButton, Input, RegisterBack } from '../../Components';
import { SignUp } from '../../Functions';

export const Register = ({ navigation: { goBack, navigate }, setData }) => {

    const [email, setEmail] = useState(),
        [number, setNumber] = useState(),
        [password, setPassword] = useState(),
        [checked, setChecked] = useState(false),
        [count, setCount] = useState(0),
        
        Navigate = () => {
            email ? (
                password ? (
                    checked ? (
                        count > 1 ? console.log("Fix you password please") : setCount(count + 1)
                    ) : (
                        setData({
                            email: email,
                            number: number,
                            password: password
                        }),
                        navigate('setprofile')
                    )
                ) : console.log("Please enter password")
            ) : console.log("Please enter email address")
        };

    useEffect(() => {
        checked !== password ? null : setChecked(false)
    })

    return (
        <RegisterBack>
            <View style={styles.back}>
                <IconButton type="back" color="#fff" Func={goBack} />
            </View>
            <View style={styles.headingPosition}>
                <Text style={styles.heading}>Sign up and Realax</Text>
            </View>
            <View style={styles.inputs}>
                <Input proxy="Email" margin={15} Note={setEmail} />
                <Input proxy="Phonenumber" margin={15} Note={setNumber} />
                <Input proxy="Password" margin={15} privacy Note={setPassword} />
                <Input proxy="Confirm Password" margin={15} privacy Note={setChecked} />
                {checked ? <Text style={styles.warning}>Warning: Password does not match</Text> : null}
            </View>
            <Button text="Next" Action={Navigate} />
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
        fontFamily: 'Italian-Regular',
        fontSize: 25,
        color: '#fff',
    },
    inputs: {
        width: '100%',
        alignItems: 'center',
        top: 85,
        height: 400
    },
    warning: {
        fontSize: 15,
        color: '#fff'
    }
})