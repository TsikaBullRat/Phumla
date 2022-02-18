import {firestore, auth} form '../'

const setStart = (name, midname, surname, ) =>{
    let fullname = name + " " + midname + " " + surname

    firestore.collection("UserData").doc(auth.currentUser.uid).update({
        name: name,
        midname: midname,
        surname: surname,
        fullname: fullname
    })

}