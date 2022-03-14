import React from "react";
import { View, Image, ImageBackground, ScrollView, StyleSheet, Text } from "react-native";
import Picture from "../../assets/images/LogIn.jpg";

const LoginBack = ({ children }) => {
  return (
    <ImageBackground source={Picture} style={styles.background1}>
      <View style={styles.layer}></View>
      <View style={styles.triangle1}></View>
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const RegisterBack = ({ children }) => {
  return (
    <ImageBackground source={Picture} style={styles.background1}>
      <View style={styles.layer}></View>
      <View style={styles.triangle2}></View>
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const HomeBack = ({ name, children, uri }) => {
  return (
    <ScrollView style={styles.background2}>
      <View style={styles.triangle3}>
        <View style={styles.head}>
          <View>
            <Text style={styles.title}>Hey {name}</Text>
            <Text style={styles.subTitle}>Wanna rest</Text>
          </View>
          <Image style={styles.profilePic} source={uri}/>
        </View>
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background1: {
    width: "auto",
    height: "100%",
    overflow: "hidden",
  },
  background2: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  layer: {
    backgroundColor: "#A08F8F",
    opacity: 0.4,
    width: "100%",
    height: "100%",
  },
  triangle1: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 250,
    borderTopWidth: 200,
    borderLeftWidth: 450,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderLeftColor: "#6F4848",
    transform: [{skewX:"-5deg"}],
    left: -20,
    top: -880,
    // opacity: 2
  },
  triangle2: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderLeftWidth: 300,
    borderRightWidth: 350,
    borderBottomWidth: 450,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#6F4848",
    transform: [{skewX:"80deg"}],
    left: -80,
    top: -980,
  },
  triangle3: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderLeftWidth: 320,
    borderRightWidth: 370,
    borderBottomWidth: 470,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#6F4848",
    transform: [{skewX:"-30deg"}],
    left: -200,
    top: -200,
  },
  subTitle: {
    flexDirection: "row",
    // fontFamily: "Italiana-Regular",
    color: "#fff",
    fontSize: 25,
  },
  content: {
    // backgroundColor: '#000',
    width: "100%",
    height: "100%",
    top: -80,
    position: "absolute",
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  title: {
    flexDirection: "row",
    // fontFamily: "Italiana-Regular",
    color: "#fff",
    fontSize: 35,
  },
  head: {
    flexDirection: "row",
    position: "absolute",
    width: 400,
    top: 300,
    left: -160,
    transform: [{skewX:"30deg"}],
    justifyContent: 'space-evenly'
  },
  profilePic:{
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: '#fff'
  }
});
export { LoginBack, RegisterBack, HomeBack };
