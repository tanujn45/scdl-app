import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Label,
} from "native-base";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform,
} from "react-native";
import Colors from "../../Constants/Colors";
import { mainStyles } from "../../Styles/Styles";

const SignIn = ({ navigation }) => {
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
        <View style={styles.form}>
          <Item floatingLabel>
            <Icon active name="home" style={{ color: "#fff" }} />
            <Label
              style={{
                color: "#fff",
                opacity: 0.5,
                marginTop: Platform.OS === "ios" ? 0 : -8,
              }}
            >
              Username
            </Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 14 }}>
            <Icon active name="lock" style={{ color: "#fff" }} />
            <Label
              style={{
                color: "#fff",
                opacity: 0.5,
                marginTop: Platform.OS === "ios" ? 0 : -8,
              }}
            >
              Password
            </Label>
            <Input />
          </Item>
        </View>
        <TouchableHighlight
          style={[
            mainStyles.buttonContainer,
            {
              //  paddingVertical: 5,
              paddingHorizontal: 25,
              borderRadius: 10,
              marginTop: 40,
            },
          ]}
          onPress={() => navigation.navigate("Drawer")}
          underlayColor={Colors.background}
        >
          <Text style={mainStyles.buttonText}>Sign In</Text>
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
    fontFamily: "robotoRegular",
  },
  subtitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "robotoRegular",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: "100%",
    height: "30%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    width: "90%",
    marginTop: 20,
  },
});
export default SignIn;
