import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import { TouchableHighlight } from "react-native-gesture-handler";

const Landing = ({ navigation }) => {
  const homeNavigation = () => {
    navigation.navigate("Drawer");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topContainer}>
        <View style={[mainStyles.cardContainer, styles.cardContainer]}>
          <Image
            style={styles.logoContainer}
            source={require("../../assets/img/symbiosis.png")}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Symbiosis</Text>
          <Text style={styles.subtitle}>Center for distance learning</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableHighlight
          style={mainStyles.buttonContainer}
          onPress={homeNavigation}
          underlayColor={Colors.background}
        >
          <Text style={mainStyles.buttonText}>Enter to explore</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  topContainer: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center",
  },
  cardContainer: {
    padding: 15,
  },
  logoContainer: {
    width: 150,
    height: 150,
  },
  titleContainer: {
    marginVertical: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    textTransform: "uppercase",
    color: Colors.primary,
    fontFamily: "monRegular",
  },
  subtitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "monRegular",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: "100%",
    height: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Landing;
