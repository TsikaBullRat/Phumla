import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BookingCard, HomeBack } from "../../Components";
import { auth, firestore } from '../../Functions'

const Line = () =><View style={styles.line}></View>

const Section = ({ sect, Push }) => {

  const [ list, setList ] = useState()
  const [ name, setName ] = useState()

  useEffect(()=>{
    if(sect === 1){
      setName("Top Class")
      // findTopClass(setList)
    }else if(sect === 2){
      setName("Go Back")
      // findReturn(setList)
    }else if(sect === 3){
      setName("Closest Hotels")
      // findClosest()
    }
  }, [])

  useEffect(()=>{
    firestore.collection("Hotels").doc("Kimberley Anne").get()
      .then(doc=>{
        setList([doc.data()])
      })
  }, [])

  return (
    <View style={styles.overall}>
      <Text style={styles.title}>{name}</Text>      
        {list?(
          <View style={styles.body}>
          <BookingCard hotel={list[0]} Push={Push} />
          <Line/>
          <BookingCard hotel={list[0]} Push={Push} />
          <Line/>
          <BookingCard hotel={list[0]} Push={Push} />
          </View>
        ):(
          null
        )}
      
    </View>
  );
};

export const Home = ({navigation}) => {

  const Push = (data) =>{
    navigation.navigate("book", {data})  
  }

  return (
    <HomeBack >
      <Section sect={1} Push={Push} />
      <Section sect={2} Push={Push} />
      <Section sect={3} Push={Push} />
    </HomeBack>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#6F4848",
    fontSize: 25,
    fontFamily: "Italiana-Regular",
    marginLeft: 50,
  },
  body: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between"
  },
  overall:{
      marginBottom: 100,
  },
  line:{
      width: 330,
      height: 2,
      backgroundColor: "#6F4848",
      marginBottom: 50,
      marginTop: 50,
      borderRadius: 25
  }
});
