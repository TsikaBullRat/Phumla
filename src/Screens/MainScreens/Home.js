import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BookingCard, HomeBack } from "../../Components";
import { auth } from '../../Functions'

const Line = () =><View style={styles.line}></View>

const Section = ({ sect }) => {
  const name =
    sect === 1
      ? "Top Class"
      : sect === 2
      ? "Go Back"
      : sect === 3
      ? "Closest Hotels"
      : null;
  return (
    <View style={styles.overall}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.body}>
        <BookingCard />
        <Line/>
        <BookingCard />
        <Line/>
        <BookingCard />
      </View>
    </View>
  );
};

export const Home = () => {
  return (
    <HomeBack >
      <Section sect={1} />
      <Section sect={2} />
      <Section sect={3} />
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
