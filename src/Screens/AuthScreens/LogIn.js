import React, {useState} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Button, Input, LoginBack, Logo } from '../../Components';
import { SignIn } from '../../Functions';


export const Login = ({navigation}) =>{
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        Enter = () =>{
            SignIn(email, password)
        }
        
    return(
        <LoginBack>
            <View style={styles.head}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.brand}>humla</Text>
            </View>
            <View style={styles.head}>
                <Text style={styles.subHeading}>
                    Welcome find a place to rest your head
                </Text>
            </View>
            <View style={styles.inputs}>
                <Input proxy="Email" margin={20} Note={setEmail} />
                <Input proxy="Password" margin={20} Note={setPassword} privacy/>
            </View>
            <View style={styles.buttons}>
                <Button text="Sign In" Action={Enter} />
                <Text style={styles.buttonsText}>OR</Text>
                <Button text="Google" />
                <Button text="Apple" />
            </View>
            <Text style={styles.textPlain}>Don't have an account <Text style={styles.pressableText} onPress={()=>navigation.navigate('register')}>Sign Up</Text></Text>
        </LoginBack>
    )
}

const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo:{
        width: 55,
        height: 80,
        backgroundColor: "#000"
    },
    brand:{
        fontSize: 45,
        color: '#fff',
        // fontFamily: "Italiana-Regular",
        fontWeight: "200",
        // marginTop: 35
    },
    subHeading:{
        fontSize: 25,
        color: '#fff',
        // fontFamily: "Italiana-Regular",
        fontWeight: "100",
        width: 250,
        margin: 20
    },
    inputs:{
        width: '100%',
        alignItems: 'center'
    },
    buttons:{
        alignItems: 'center'
    },
    buttonsText:{
        fontSize:20,
        // fontFamily:"RobotoCondensed-Regular",
        color:'#fff'
    },
    textPlain:{
        color: '#fff',
        fontSize: 20
    },
    pressableText:{
        color: '#989595'
    }
})