import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const Fees = (props) => {
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
        <Text style={styles.heading}>
          Application Form Fees (Non-refundable):
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            For Indian Residents (General / Defence Personnel / Paramilitary /
            Police): ₹ 1200/-
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
            International / SAARC: US $100 OR Rs. 7,200/-
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>Program Fees:</Text>
        <Text style={styles.subtitle}>
          Students have two options of paying the fees as mentioned below:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 10 }}
          />
          <Text style={styles.point}>
            Option 1 – Two -Installments: Student has to pay the full course
            fees in two installments. Pay 1st Installment within 15 days from
            the date of admission and Pay 2nd Installment within 60 days from
            the date of payment of 1st Installment.
          </Text>
        </View>

        {/* Table to be done here */}

        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Option 2 - One Time Payment:- Student has to pay the full course
            fees in one time payment, within 30 days from the date of admission
            as follows:
          </Text>
        </View>

        {/* Table goes here */}

        <Text style={[styles.heading, { marginTop: 20 }]}>Note:</Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Participants are required to pay exam fees per exam per attempt
            separately.Exam Fee is not a part of Program Fee.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Fee Payment Mode:
        </Text>
        <Text style={styles.subtitle}>
          Fees can be paid Online or by Demand Draft.
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Payment via Online: this can be done through payment gateway.
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
            Payment via DD: this can be submitted at SCDL Pune campus. The
            Demand Draft needs to be in favor of "The Director, SCDL, Pune"
            payable at Pune only.
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

export default Fees;
