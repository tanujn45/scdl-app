import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Header from "../../Components/Header";

const Home = ({ navigation }) => {
  return (
    <View style={mainStyles.screen}>
      <Header headingTitle="Home" navigation={navigation} />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
