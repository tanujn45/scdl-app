import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const ScdlAdvantage = (props) => {
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
          Leading distance learning institute in the country:
        </Text>
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
            course in Management programmes by Career India 2016
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
            Ranked 1st amongst the top Distance Learning Institutes for student
            learning experience by Careers 360 Rating 2012.
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
            Ranked 2nd amongst the Leading Institutes , by DNA Indus Learning
            Survey 2012.
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
            Ranked 3rd amongst the Top Distance Learning Institutes - by
            Competition Success Review.
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
            Ranked 8th amongst the Best Distance Learning Institutes - by
            Outlook.
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
            SCDL is the winner of the Maharashtra Government's IT Award for
            Human Resource Development through quality Distance Education and
            innovative use of ICT
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Extremely High Acceptance In The Industry:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 10 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning is an education provider to
            top Corporates such as Airtel, Bajaj Finance Ltd., Bharti Pvt. Ltd.,
            Cipla, Cognizant, Collabera, Eaton Technologies Pvt. Ltd., HCL,
            Hindalco Industries Ltd., IBM, Vodafone, Wall-mart, Wipro, TATA AIA
            etc and many more.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Excellent Range Of Programs:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning offers an excellent range of
            programs across industry sectors, these include: Business
            Management, International Business, IT Management, Banking and
            Finance, Supply Chain Management, Customer Relationship Management,
            Insurance Management, Export & Import Management, Retail Management,
            Business and Corporate Laws and Entrepreneurship Development, Cyber
            Laws and Digital Marketing.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Contemporary Delivery Styles:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Approach to teaching includes contemporary delivery styles with a
            combination of – Printed study books, online classroom learning,
            e-learning, e-mentoring and faculty interaction.
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
            Tutors use online chats and online classrooms to stimulate
            discussions. These sessions allow students to interact with faculty
            and clear their doubts immediately.
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
            'Symbiosis World Campus' - a powerful web portal, forms the Centre
            of learning with facilities like - Computer based Assignment
            Submission, Computer based Exam Booking, Message Boards and
            E-Mentoring.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Dynamic Assessment System:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            A robust system of Computer based Assignments and On Demand
            Examinations System allows participants to decide pace and style of
            the study! Huge advantage for working professionals allowing them to
            prioritise their professional and learning needs.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Excellent Student Services:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Excellent Student support services in terms of a dedicated Call
            Centre with counselors to give prompt response / guidance. In
            addition an 'e' communication centre which handles all student
            queries promptly & effectively.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Focus On Employment Opportunities:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            Symbiosis Centre for Distance Learning offers placement assistance
            to the students. SCDL has received an overwhelming response from the
            industry for recruitments.
          </Text>
        </View>
        <Text style={[styles.heading, { marginTop: 20 }]}>
          Modular Course System:
        </Text>
        <View style={styles.points}>
          <Feather
            name="star"
            size={15}
            color="black"
            style={{ marginTop: 2 }}
          />
          <Text style={styles.point}>
            SCDL offers participants an option to take Single Courses and
            Accumulate credits for future transfer to other programs of SCDL
            thus providing Flexible Pathways of Learning.
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

export default ScdlAdvantage;
