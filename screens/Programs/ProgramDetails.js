import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const ProgramDetails = ({ navigation }) => {
  const [data, setData] = useState([]);
  return (
    <View style={mainStyles.screen}>
      <View>
        <Text>tanuj</Text>
      </View>
      <View style={mainStyles.cardContainer}></View>
    </View>
  );
};

export default ProgramDetails;
