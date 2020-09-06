import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, Avatar, Button } from "@ui-kitten/components";
import { mainStyles } from "../../Styles/Styles";
import Header from "../../Components/Header";

const Home = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Header navigation={navigation} headingTitle="Home" />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
  },
});

export default Home;
