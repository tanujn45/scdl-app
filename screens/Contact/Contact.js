import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const Contact = ({ navigation }) => {
  return (
    <View style={mainStyles.screen}>
      <Header headingTitle="Contact Us" navigation={navigation} />
      <View
        style={[
          mainStyles.cardContainer,
          mainStyles.cardContainerSpecific,
          styles.cardTouchContainer,
        ]}
      >
        <View style={styles.contactContainer}>
          <Image
            style={mainStyles.cardImage}
            source={require("../../assets/img/pin.png")}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.textBold}>Symbiosis Bhavan</Text>
            <Text style={styles.normalText}>
              1065 B, Gokhale Cross Road, Model Colony,
            </Text>
            <Text style={styles.normalText}>
              <Text style={styles.textBold}>Pune</Text> - 411016
            </Text>
            <Text style={styles.textBold}>Maharashtra, India</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          mainStyles.cardContainer,
          mainStyles.cardContainerSpecific,
          styles.cardTouchContainer,
        ]}
      >
        <View style={styles.contactContainer}>
          <Image
            style={mainStyles.cardImage}
            source={require("../../assets/img/phone.png")}
          />
          <View style={styles.phoneContainer}>
            <View style={styles.contactTextContainer}>
              <Text style={styles.textBold}>Telephone </Text>
              <Text style={styles.textBold}>Fax </Text>
              <Text style={styles.textBold}>WhatsApp </Text>
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.normalText}>+91 2066 211000</Text>
              <Text style={styles.normalText}>+91 2066 211000</Text>
              <Text style={styles.normalText}>+91 2066 211000</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={[
          mainStyles.cardContainer,
          mainStyles.cardContainerSpecific,
          mainStyles.cardTouchContainer,
        ]}
      >
        <View style={styles.socialContainer}>
          <Image
            style={styles.socialImage}
            source={require("../../assets/social/facebook.png")}
          />
          <Image
            style={styles.socialImage}
            source={require("../../assets/social/instagram.png")}
          />
          <Image
            style={styles.socialImage}
            source={require("../../assets/social/linkedin.png")}
          />
          <Image
            style={styles.socialImage}
            source={require("../../assets/social/twitter.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTouchContainer: {
    height: 200,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    // elevation: 5,
    overflow: "hidden",
  },
  contactContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    marginBottom: 2,
    fontFamily: "robotoBold",
    fontWeight: "bold",
    fontSize: 16,
  },
  normalText: {
    fontSize: 16,
    marginBottom: 2,
  },
  contactTextContainer: {
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  socialContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  socialImage: {
    height: 50,
    width: 50,
  },
  phoneContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
});

export default Contact;
