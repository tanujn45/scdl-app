import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import AboutSCDL from "../AboutUs/AboutUsDetails/AboutSCDL";

const AboutUsDetails = (props) => {
  props.navigation.setOptions({ title: props.route.params.title });
  // console.log(test);
  return (
    <View><AboutSCDL /></View>
  )
}

export default AboutUsDetails;