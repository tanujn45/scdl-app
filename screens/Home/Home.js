import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, Avatar, Button } from "@ui-kitten/components";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";

const Home = () => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
  },
});

export default Home;
