import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../../Components/Header";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import { Montserrat_100Thin } from "@expo-google-fonts/montserrat";

const AboutTheApp = ({ navigation }) => {
  return (
    <View style={[mainStyles.screen, { flex: 1 }]}>
      <Header headingTitle="Contact Us" navigation={navigation} />
      <View style={styles.containerBox}>
        <Image
          style={styles.logoContainer}
          source={require("../../assets/img/symbiosis.png")}
        />
        <Text style={[styles.headText, { fontSize: 50 }]}>Symbiosis</Text>
        <Text style={styles.headText}>Center for Distance Learning</Text>
        <Text style={styles.version}>Version: 1.0.0</Text>
        <Text style={styles.dev}>
          Developers - {"\n"}Tanuj Namdeo, Aditya Pathak, Hemant Jangid, Prateek
          Rupani
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 150,
    height: 150,
  },
  headText: {
    // color: Colors.secondary,
    fontFamily: "robotoBold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  version: {
    fontSize: 20,
    marginBottom: 20,
  },
  dev: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 30,
  },
});

export default AboutTheApp;
