import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const RankingAndAwards = (props) => {
  return (
    <ScrollView>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 50,
        }}
      >
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning has been ranked 1st amongst
            the top Distance Learning B-schools that offer distance learning
            course in Management programmes by Career India 2016.
          </Text>
        </View>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning has been ranked 1st amongst
            the top Distance Learning Institutes for student learning experience
            by Careers 360
          </Text>
        </View>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning has been ranked 2nd amongst
            the Leading Institutes, by DNA Indus Learning Survey 2012.
          </Text>
        </View>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning has been ranked 3rd amongst
            the Top Distance Learning Institutes - by Competition Success
            Review.
          </Text>
        </View>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning has been ranked 5th amongst
            the Best Distance Learning Institutes - by Careers 360.
          </Text>
        </View>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            SCDL has won the Maharashtra Government's IT Award for Human
            Resource Development through quality Distance Education and
            innovative use of ICT.
          </Text>
        </View>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 10 }}
          />
          <Text style={styles.point}>
            SCDL is an ISO Certified institution since last 6 years. In 2018,
            Symbiosis Centre for Distance Learning (SCDL) has been accredited
            with ISO 9001:2015 certification. This certificate was awarded to
            SCDL for successful establishment of "Quality Management System" by
            NVT Quality Certification Pvt. Ltd. as a certifying body. NVT
            Quality Certification Pvt. Ltd. is accredited by ANAB.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "robotoBold",
    marginBottom: 5,
    fontSize: 20,
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
  subtitle: {
    fontSize: 15,
    width: "100%",
    textAlign: "justify",
  },
});

export default RankingAndAwards;
