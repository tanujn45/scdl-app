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
import RankingAwards from "../AboutUs/AboutUsDetails/RankingAwards";

const AboutUsDetails = (props) => {
  props.navigation.setOptions({ title: props.route.params.title });
  // console.log(test);
  return (
    <View>
      <RankingAwards />
    </View>
  );
};

export default AboutUsDetails;
