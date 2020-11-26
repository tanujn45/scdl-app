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
import Director from "../AboutUs/AboutUsDetails/Director";
import ScdlAdvantage from "./AboutUsDetails/ScdlAdvantage";
import NewsAndEvents from "./AboutUsDetails/NewsAndEvents";

const AboutUsDetails = (props) => {
  props.navigation.setOptions({ title: props.route.params.title });
  // console.log(test);
  return (
    // <View>
    //   <Director />
    //   <ScdlAdvantage />
    // </View>
    <AboutSCDL />
  );
};

export default AboutUsDetails;
