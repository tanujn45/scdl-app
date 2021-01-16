import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from "react-native";
import { mainStyles } from "../../../Styles/Styles";
import Colors from "../../../Constants/Colors";

const AboutSCDL = (props) => {
  props.navigation.setOptions({ title: props.route.params.title });
  const paragraph = [
    {
      key: "1",
      point:
        "Symbiosis Centre for Distance Learning (SCDL) is one of the largest autonomous distance learning education institute in India.",
    },
    {
      key: "2",
      point:
        "Symbiosis Centre for Distance Learning (SCDL) has, since its inception in 2001, made rapid strides in providing quality education to many students - making it one of the few large and most sought after distance learning institutes of India.",
    },
    {
      key: "3",
      point:
        "Symbiosis Centre for Distance Learning (SCDL) offers Post Graduate Diploma, Diploma and Certificate programs across industry sectors including Business Management, International Business, Information Technology, Banking and Finance, Supply Chain Management, Customer Relationship Management, Insurance Management, Education Management, Business and Corporate Law and Entrepreneurship Development. In addition, Our team partners with local, national, and international organizations to offer the Corporate programs. Leading organizations including IBM, Cognizant, Infosys, Wipro, Ranbaxy, Collabra, Aditya Birla, Bharti Retail Pvt. Ltd., Wall-mart, Vodafone, Cipla, etc. are amongst others who have collaborated with SCDL to offer the corporate programs.",
    },
    {
      key: "4",
      point:
        "In order to ensure quality, SCDL gets the best of academic resources for teaching, evaluation, e-Learning and self-learning material preparation from its sister Management Institutes as well as from the industry. The curriculum is comparable to that of any full time management institute. The curriculum is designed and constantly updated by the Academics Department comprising faculty from top ranks of the industry and having several years of teaching experience. SCDL has full time and over 350 adjunct faculty who are available for academic counseling, developing curriculum and assessments and for providing feedback to students on their academic progress.",
    },
    {
      key: "5",
      point:
        "SCDL has pioneered several innovative concepts in distance education such as:",
    },
  ];
  const aboutPoints = [
    {
      key: "1",
      point:
        'Introduction of a "Blended Learning" methodology for all our programs, combining all the three forms of learning, namely, Published / Printed - Self-Learning Material / Books, Digital e-learning, and Faculty Interaction - Chat Sessions and Online Classroom Facility',
    },
    {
      key: "2",
      point:
        "Introduction of highly interactive e-Learning content as a supplementary learning methodology to improve the understanding of concepts through case studies and practical examples, thereby bridging the gap between the book and the classroom. Computer based assignment system to provide students the flexibility and convenience to submit assignments at any time and receive immediate results and feedback.",
    },
    {
      key: "3",
      point:
        "The Virtual Classroom facility with the Faculties has removed the distance barrier between the teacher and the taught. This facility provided by SCDL is an additional student support service to interact with faculty members online and live. Students can ask questions, have peer interaction and even replay an archived lecture. Virtual Classroom sessions are conducted for all courses throughout the year.",
    },
    {
      key: "4",
      point:
        "Online Faculty Chat Sessions allow students to interact with faculty by typing their questions and receiving immediate answers in an online environment",
    },
    {
      key: "5",
      point:
        "Modular Course System with Credit Banking Facility: Ability to take any Single Course and Bank and Accumulate credits for future transfer to other programs of SCDL thus providing Flexible Pathways of Learning.",
    },
    {
      key: "6",
      point:
        "A dedicated Call Centre with dedicated telephone lines supported by call operators and student counselors to give prompt response / guidance to our students.",
    },
    {
      key: "7",
      point:
        "An 'e' communication center which handles all student queries promptly & effectively",
    },
    {
      key: "8",
      point:
        "SCDL has a powerful web portal, www.scdl.net providing facilities like - Computer based Assignment Submission, computer based examinations Booking, Message Board, Counseling, Campus-email ID with 10GB mailbox, ability to view Admission Status and Academic Status, etc.",
    },
  ];
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
        {paragraph.map((item) => (
          <Text style={styles.subtitle}>{item.point}</Text>
        ))}

        {aboutPoints.map((item) => (
          <View style={styles.points}>
            <Feather
              name="star"
              size={15}
              color="black"
              style={{ marginTop: 2 }}
            />
            <Text style={styles.point}>{item.point}</Text>
          </View>
        ))}
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
  paragraph: {
    fontFamily: "robotoRegular",
    lineHeight: 20,
    fontSize: 15,
    textAlign: "justify",
  },
  points: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  point: {
    marginLeft: 10,
    fontSize: Platform.OS === "ios" ? 15 : 13,
    width: "90%",
    textAlign: "justify",
  },
  subtitle: {
    fontSize: Platform.OS === "ios" ? 15 : 13,
    width: "100%",
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default AboutSCDL;
