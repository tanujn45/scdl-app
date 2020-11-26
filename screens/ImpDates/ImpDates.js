import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const ImpDates = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      title: "Program Commenced",
      date: "01 July",
    },
    {
      key: "2",
      title: "Online Class Commenced",
      date: "02 July",
    },
    {
      key: "3",
      title: "Last date for change in Specialisation",
      date: "31 July",
    },
    {
      key: "4",
      title: "Last date for change in Program",
      date: "31 July",
    },
    {
      key: "5",
      title: "Last date to submit deficient document/s to SCDL",
      date: "10 August",
    },
    {
      key: "6",
      title: "Last date to apply for Dual Specialisation",
      date: "31 August",
    },
    {
      key: "7",
      title: "Admission Cancellation - Refund of fees",
      date: "20 August",
    },
    {
      key: "8",
      title: "Full payment of fees",
      date: "10 August",
    },
    {
      key: "9",
      title: "Assignment release",
      date: "01 August",
    },
    {
      key: "10",
      title: "Exam release",
      date: "01 September",
    },
  ]);

  const ImpDatesItem = (item) => {
    return (
      <TouchableHighlight style={styles.cardTouchContainer}>
        <View style={[mainStyles.cardContainer, styles.cardContainerSpecific]}>
          <View style={mainStyles.cardLeftContainer}>
            <Text style={styles.date}>{item.date.slice(0, 2)}</Text>
            <Text style={styles.month}>{item.date.slice(3, 6)}</Text>
          </View>
          <View style={styles.cardRightContainer}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={[mainStyles.screen, { flex: 1 }]}>
      <Header headingTitle="Important Dates" navigation={navigation} />
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
    flex: 1,
    paddingBottom: 30,
  },
  cardTouchContainer: {
    height: 120,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    // elevation: 5,
    overflow: "hidden",
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
  cardContainerSpecific: {
    width: "100%",
    flexGrow: 1,
    alignSelf: "center",
    borderRadius: 10,
    minHeight: 100,
    // marginVertical: 10,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: "robotoRegular",
  },
  cardRightContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexGrow: 1,
    alignItems: "center",
    width: 0,
    paddingLeft: 15,
  },
});

export default ImpDates;
