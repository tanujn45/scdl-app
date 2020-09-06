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
      <Header navigation={navigation} headingTitle="Contact Us" />
      <View
        style={[mainStyles.cardContainer, mainStyles.cardContainerSpecific]}
      >
        <Image
          style={mainStyles.cardImage}
          source={require("../../assets/img/symbiosis.png")}
        />
        <Text>tanuj</Text>
      </View>
      <View
        style={[mainStyles.cardContainer, mainStyles.cardContainerSpecific]}
      >
        <Text>tanuj</Text>
      </View>
    </View>
  );
};

export default Contact;
