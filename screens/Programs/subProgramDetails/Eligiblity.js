import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    key: "1",
    point:
      "Bachelor's degree holder / Graduate in any discipline from a recognised University.",
  },
  {
    key: "2",
    point:
      "International / SAARC Graduate from a recognised / accredited University / Institution.",
  },
  {
    key: "3",
    point:
      "Students who have appeared for final year of examination of their bachelor's degree program and are awaiting results can also apply, subject to successfully completing their bachelor's degree program / graduation within the time period specified by SCDL.",
  },
];

const Eligiblity = (props) => {
  return (
    <View style={styles.content}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.points}>
              <Feather
                name="star"
                size={15}
                color="black"
                style={{ marginTop: 10 }}
              />
              <Text style={styles.point}>{item.point}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  points: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "flex-start",
  },
  point: {
    marginLeft: 10,
    fontSize: 15,
    width: "90%",
  },
});

export default Eligiblity;
