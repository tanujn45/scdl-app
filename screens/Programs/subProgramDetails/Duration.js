import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, FlatList } from "react-native";

const Duration = (props) => {
  const duration = [
    {
      key: "1",
      point: "The duration of the program is two years.",
    },
    {
      key: "2",
      point: "The registration period is valid for four academic years.",
    },
  ];
  const exit = [
    {
      key: "1",
      point:
        "Only PGDBA students who complete one full year of study (I and II Semesters) and successfully pass the examination and assignment corresponding to first two semesters, but who are unable to complete the III and IV Semesters due to unavoidable circumstances, will be eligible for a Diploma in Management (DIM).",
    },
    {
      key: "2",
      point:
        "An eligible student will have to make a specific application to SCDL to opt out of the PGDBA Program within the registration validity period of PGDBA. The fees paid for PGDBA are non-refundable and non-transferable.",
    },
  ];
  return (
    <View style={styles.content}>
      <FlatList
        data={duration}
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
      <View style={styles.exitContent}>
        <Text style={styles.exit}>Exit Policy :</Text>
        <FlatList
          data={exit}
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
  exitContent: {
    marginTop: 20,
  },
  exit: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Duration;
