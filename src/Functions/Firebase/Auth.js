import {auth, firestore} from '../'

const SignUp = (email, password, name, midname, surname, Phonenumber) =>{
    let fullname = name + " " + midname + " " + surname
    auth.createUserWithEmailAndPassword(email, password)
        .then(()=>{
            firestore.collection("UserData").doc(auth.currentUser.uid).set({
                email: email,
                Phonenumber: Phonenumber,
                name: name,
                midname: midname,
                surname: surname,
                fullname: fullname
            })
        })

}
const SignIn = (email, password) =>{
    auth.signInWithEmailAndPassword(email, password)
        .then(alert("Running"))
}
const SignOut = () =>{
    auth.signOut()
}
const Reset = () =>{}

export {SignUp, SignIn, SignOut, Reset}