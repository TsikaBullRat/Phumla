import {firestore, auth} from '../'

const setStart = (name, midname, surname, ) =>{
    let fullname = name + " " + midname + " " + surname

    firestore.collection("UserData").doc(auth.currentUser.uid).update({
        name: name,
        midname: midname,
        surname: surname,
        fullname: fullname
    })

}

const findTopClass = (list) =>{

    let items = []
    let check = 0
    let stars = 5

    for(stars; stars !== 0; stars--){
        
        firestore.collection("Hotels").where("rating", "==", stars)
        .onSnapshot(query=>{
            query.forEach(doc=>{
                if(check <= 3){
                    doc.exists?items=[...items, doc.data()]:null
                }
            })
        })

    }
}