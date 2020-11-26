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

const News = (props) => {
  const data = [
    {
      key: "1",
      image: require("../../../../assets/img/newsandevents/president.jpg"),
      title:
        "President of India conferred the 'Padma Bhushan' award to Prof. Dr. S.B. Mujumdar",
      content:
        "We feel happy and proud to inform you that the President of India Shrimati Pratibha DeviSingh Patil conferred the 'Padma Bhushan' award on Prof. Dr. S. B. Mujumdar, Founder and President, Symbiosis in the investiture held at Rashtrapati Bhavan, New Delhi on Thursday, March 22, 2012. The Padma Bhushan, India's third highest civilian award, was declared to Dr. S. B. Mujumdar by the President of India on Republic Day.Dr. S.B. Mujumdar is a distinguished Academician and Educationist. He is the Founder & President of Symbiosis, a multi-lingual, multi-national and multi-disciplinary educational complex of international repute. He is also the Chancellor of Symbiosis International University. In appreciation of his long and illustrious social contribution in the field of education, the President of India awarded the prestigious 'Padma Shri' to Dr. S.B.Mujumdar in 2005. Dr. Mujumdar was also awarded 'Punyabhushan' award in the year 2009 at the hands of Hon'ble Vice President Shri. Hamid Ansari.",
    },
    {
      key: "2",
      image: require("../../../../assets/img/newsandevents/mujumdar-sir.jpg"),
      title:
        "P D Patil Maharashtra Bhushan Puraskar' to Prof. Dr. S B Mujumdar",
      content:
        "Prof. Dr. S B Mujumdar, President and Founder Symbiosis, has been awarded the prestigious ' P D Patil Maharashtra Bhushan Puraskar ' by the ‘P D Patil Gaurav Pratishthan, Karad in appreciation of his valuable contributions to the field of education for the past four decades.",
    },
    {
      key: "3",
      image: require("../../../../assets/img/newsandevents/vocational.jpg"),
      title: "Vocational Committee Report - Govt. of Maharashtra",
      content:
        "At a press conference held on 1st July 2011 in Pune, Dr. Swati Mujumdar, Chairperson of Vocational Committee, submitted the Vocational Committee report to Hon'ble Shri. Rajesh Tope, Minister for Higher & Technical Education, Govt. of Maharashtra. The report consisted of some path breaking policies and recommendations in Vocational Education, Training & Skill Development sector for the State of Maharashtra and for our country.",
    },
    {
      key: "4",
      image: require("../../../../assets/img/newsandevents/book.jpg"),
      title:
        "A book titled 'Symbiosis Is My Breath' authored by Ms. Swati Mujumdar",
      content:
        "A book titled 'Symbiosis Is My Breath' authored by Ms. Swati Mujumdar, Director, Symbiosis Centre for Distance Learning (SCDL) celebrating 75th birthday of Dr. S. B Mujumdar, Founder & President Symbiosis was released at the hands of noted advocate and former law minister, Adv. Ram Jethmalani on 07th August, 2010. This special publication enumerates the story of the birth of Symbiosis and its long journey in realizing the dreams of Dr. Mujumdar in creating a home away from home for foreign students.",
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
    alignSelf: "center",
  },
  point: {
    marginTop: 20,
    fontSize: 15,
    width: "95%",
    alignSelf: "center",
    textAlign: "justify",
  },
});

export default News;
