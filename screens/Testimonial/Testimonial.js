import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const Testimonial = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: 1,
      name: "Balaji M V, PGDDS",
      image: require("../../assets/img/rank_1.png"),
      text:
        "I am a data scientist in an electronics manufacturing company in Chennai. I had joined this SCDL course to enable me to understand the concepts within data science. The admission procedure was quite is straight forward. 6 months into the course, the content has been excellent. All topics required (statistics, python, R, machine learning) have been covered in a clear and concise manner. The exam dates are flexible and study materials are precise. I highly recommend this course to anyone who wants to kick start a career in data science. As always, Symbiosis is one of the best distance education institutes in India.",
    },
  ]);
  const student = (item) => {
    return (
      <ScrollView>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image style={styles.img} source={item.image} />
          <Text style={styles.heading}>{item.name}</Text>
          <Text style={styles.paragraph}>{item.text}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={[mainStyles.screen, { flex: 1, marginBottom: 100 }]}>
      <Header headingTitle="Testimonials" navigation={navigation} />
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={data}
          renderItem={({ item }) => student(item)}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  img: {
    display: "flex",
    alignSelf: "center",
    marginVertical: 20,
  },
  paragraph: {
    marginHorizontal: 15,
    width: "90%",
    textAlign: "justify",
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 5,
    paddingTop: 10,
  },
});

export default Testimonial;
