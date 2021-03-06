import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, IconButton, Input, RegisterBack } from '../../Components';

export const SetProfile = ({navigation:{goBack, naviagte}}) =>{

    const [fname, setFname] = useState(null),
        [mname, setMname] = useState(null),
        [lname, setLname] = useState(null)

    return(
        <RegisterBack>
            <View style={styles.back}>
                <IconButton type="back" color="#fff" Func={goBack}/>
            </View>
            <View style={styles.headingPosition}>
            <Text style={styles.heading}>Sign up and Realax</Text>
            </View>
            <View style={styles.inputs}>
                <Input proxy="Firstname" margin={15} Note={setFname}/>
                <Input proxy="Middle Name" margin={15} Note={setMname}/>
                <Input proxy="Lastname" margin={15} Note={setLname}/>
            </View>
            {fname? <Button text="Done" /> : null}
            <Button text="Skip" />
        </RegisterBack>
    )
}

const styles = StyleSheet.create({
    back:{
        top: 25,
        left: -140
    },
    headingPosition:{
        top: 45
    },
    heading:{
        fontFamily: 'Italian-Regular',
        fontSize: 25,
        color: '#fff',
    },
    inputs:{
        width: '100%',
        alignItems: 'center',
        top: 85,
        height: 400
    },
})