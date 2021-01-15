import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

const Eligibility = (props) => {
  return (
    <View style={styles.content}>
      <FlatList
        data={props.content}
        renderItem={({ item }) => {
          return (
            <View style={styles.points}>
              <Feather
                name="star"
                size={15}
                color="black"
                style={{ marginTop: 2 }}
              />
              <Text style={styles.point}>{item.content}</Text>
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
    textAlign: "justify",
  },
});

export default Eligibility;
