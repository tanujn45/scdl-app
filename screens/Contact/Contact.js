import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { TouchableHighlight } from "react-native-gesture-handler";

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
              <Text style={styles.textBold}>Telephone{"\n"}</Text>
              <Text style={styles.textBold}>Fax{"\n"}</Text>
              <Text style={styles.textBold}>WhatsApp </Text>
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.normalText}>+91 2066 211000</Text>
              <Text style={styles.normalText}>+91 9370 722198</Text>

              <Text style={styles.normalText}>+91 2066 211040</Text>
              <Text style={styles.normalText}>+91 2066 211041</Text>
              <Text style={styles.normalText}>+91 8956 648798</Text>
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
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#fff"
            onPress={() =>
              Linking.openURL("https://www.facebook.com/SCDLDistanceLearning")
            }
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/social/facebook.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#fff"
            onPress={() =>
              Linking.openURL("https://www.instagram.com/symbiosisdistance/")
            }
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/social/instagram.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#fff"
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/school/symbiosiscentrefordistancelearning"
              )
            }
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/social/linkedin.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#fff"
            onPress={() =>
              Linking.openURL(
                "https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=SCDLSymbiosis"
              )
            }
          >
            <Image
              style={styles.socialImage}
              source={require("../../assets/social/twitter.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTouchContainer: {
    height: Platform.OS === "ios" ? 240 : 270,
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
    fontSize: Platform.OS === "ios" ? 16 : 14,
    lineHeight: 20,
  },
  normalText: {
    fontSize: Platform.OS === "ios" ? 16 : 14,
    // fontFamily: "robotoBold",
    // fontWeight: "bold",
    marginBottom: 2,
    lineHeight: Platform.OS === "ios" ? 19.3 : 18,
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
