import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const ImpDates = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      title: "Session Start",
      date: "24 August",
    },
    {
      key: "2",
      title: "Online Class",
      date: "15 September",
    },
    {
      key: "3",
      title: "Annual Fest",
      date: "18 November",
    },
    {
      key: "4",
      title: "Winter Breaks",
      date: "25 December",
    },
    {
      key: "5",
      title: "Codec Start",
      date: "01 November",
    },
  ]);

  const ImpDatesItem = (item) => {
    return (
      <TouchableHighlight style={mainStyles.cardTouchContainer}>
        <View
          style={[mainStyles.cardContainer, mainStyles.cardContainerSpecific]}
        >
          <View style={mainStyles.cardLeftContainer}>
            <Text style={styles.date}>{item.date.slice(0, 2)}</Text>
            <Text style={styles.month}>{item.date.slice(3, 6)}</Text>
          </View>
          <View style={mainStyles.cardRightContainer}>
            <Text style={mainStyles.cardTitle}>{item.title}</Text>
            <View style={mainStyles.cardLMContainer}>
              <Text style={mainStyles.cardLMText}>Learn More</Text>
              <Feather name="arrow-right" size={17} color={Colors.grey} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={mainStyles.screen}>
      <Header navigation={navigation} headingTitle="Important Dates" />
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => ImpDatesItem(item)}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 10,
  },
  date: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "robotoBold",
  },
  month: {
    color: "#fff",
    textTransform: "uppercase",
    paddingTop: 3,
    letterSpacing: 2,
    fontSize: 16,
    fontFamily: "robotoRegular",
  },
});

export default ImpDates;
