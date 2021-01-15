import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Colors from "../../../Constants/Colors";

const Overview = (props) => {
  return (
    <ScrollView>
      <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
        <Text style={styles.paragraph}>{props.overview}</Text>
        <Text style={styles.heading}>Carreer Opportunities: </Text>
        <Text style={styles.paragraph}>{props.careerOpp}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: "robotoRegular",
    lineHeight: 20,
    fontSize: 15,
    textAlign: "justify",
  },
  heading: {
    fontFamily: "robotoBold",
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
  },
});

export default Overview;
