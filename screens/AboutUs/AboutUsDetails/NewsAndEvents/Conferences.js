import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
} from "react-native";

const Conferences = (props) => {
  const data = [
    {
      key: "1",
      image: require("../../../../assets/img/newsandevents/conferences/ICDE2017.jpg"),
      title: "SCDL First Alumni Meet - Pune",
      content:
        "In keeping with Symbiosis Centre for Distance Learnings initiative to always stay connected with all its students, SCDL organized its first Alumni Meet on April 6, 2013 at the SCDL campus in Pune. The event received an enthusiastic response with more than 70 students from previous batches coming together. The Alumni Meet gave a “face” to the virtual student fraternity of SCDL. In her welcome address, Dr. Swati Mujumdar, Director, SCDL, talked about how the institute has evolved since its inception and the new programs that have been introduced. The Director also announced the creation of an alumni page where former students can log in to connect with each other and share their experiences. To make this association a more valued experience, SCDL will provide its alumni access to its e-learning material as well as its e-library. SCDL took the opportunity to felicitate some of the alumni who have achieved great success in their professional lives. As part of the event, a workshop on strategic management was conducted by Dr Sripad S Thavare. All the participants were given a certificate of participation and a memento. It was a memorable event, which gave the students an opportunity to reconnect with the institute.",
    },
    {
      key: "2",
      image: require("../../../../assets/img/newsandevents/conferences/ODL.png"),
      title: "Alumni Meet - Dubai",
      content:
        "SCDL hosted its first International ALUMNI MEET at Dubai on Thursday April 18, 2013 between 6 pm to 8 pm at Hotel Regent Palace, Dubai. The Alumni meet received an overwhelming response and a large number of alumni from all walks of life attending the Meet. The Meet started with a Welcome Address by SCDL Director, Dr Swati Mujumdar. The Welcome address was followed by a brief introduction by all alumni present for the Meet. An interactive session of one hour with the Director led to a number of valuable suggestions being received. SCDL also felicitated its Star Alumni who have done exceptionally well in their fields of work. This Meet provided an excellent platform for the alumni to network and interact amongst themselves and with the SCDL staff. We look forward to arranging many more such Alumni Meets in the future.",
    },
  ];
  return (
    <View style={styles.content}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={item.image} />
                <Text style={styles.point}>{item.content}</Text>
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
    width: "100%",
    alignSelf: "center",
    // backgroundColor: "red",
    // marginTop: 10,
  },
  card: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "flex-start",
    borderRadius: 20,
    backgroundColor: "#f0f5f1",
    width: "95%",
    alignSelf: "center",
  },
  cardImage: {
    // height: 200,
    // width: 200,
    alignSelf: "center",
    resizeMode: "contain",
    maxWidth: "90%",
    height: 220,
  },
  point: {
    marginTop: 20,
    fontSize: 15,
    width: "100%",
    alignSelf: "center",
    textAlign: "justify",
  },
});

export default Conferences;
