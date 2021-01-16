import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../../Components/Header";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import { Montserrat_100Thin } from "@expo-google-fonts/montserrat";

const AboutTheApp = ({ navigation }) => {
  return (
    <View style={[mainStyles.screen, { flex: 1 }]}>
      <Header headingTitle="About the App" navigation={navigation} />
      <View style={styles.containerBox}>
        <Image
          style={styles.logoContainer}
          source={require("../../assets/img/symbiosis.png")}
        />
        <Text
          style={[
            styles.headText,
            { fontSize: Platform.OS === "ios" ? 50 : 40 },
          ]}
        >
          Symbiosis
        </Text>
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
    fontSize: Platform.OS === "ios" ? 24 : 20,
    textAlign: "center",
    marginBottom: 10,
  },
  version: {
    fontSize: Platform.OS === "ios" ? 20 : 16,
    marginBottom: 20,
  },
  dev: {
    textAlign: "center",
    fontSize: Platform.OS === "ios" ? 18 : 14,
    marginHorizontal: 30,
  },
});

export default AboutTheApp;
