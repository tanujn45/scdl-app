import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AboutUsDetails from "../AboutUs/AboutUsDetails";

const AboutUs = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      image: require("../../assets/programs/team.png"),
      title: "About SCDL",
    },
    {
      key: "2",
      image: require("../../assets/programs/user.png"),
      title: "Director's Message",
    },
    {
      key: "3",
      image: require("../../assets/programs/user.png"),
      title: "Rankings and Awards",
    },
    {
      key: "4",
      image: require("../../assets/programs/user.png"),
      title: "SCDL Advantage",
    },
    {
      key: "5",
      image: require("../../assets/programs/user.png"),
      title: "News and Events",
    },
    {
      key: "6",
      image: require("../../assets/programs/user.png"),
      title: "Recognition",
    },
  ]);

  const aboutUsItems = (item) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate("AboutUsDetails", item)}
        underlayColor="transparent"
        style={mainStyles.cardTouchContainer}
      >
        <View
          style={[mainStyles.cardContainer, mainStyles.cardContainerSpecific]}
        >
          <View style={mainStyles.cardLeftContainer}>
            <Image style={mainStyles.cardImage} source={item.image} />
          </View>
          <View style={mainStyles.cardRightContainer}>
            <Text style={mainStyles.cardTitle}>{item.title}</Text>
            <View style={mainStyles.cardLMContainer}>
              <Text style={mainStyles.cardLMText}>Learn More</Text>
              <Feather name="arrow-right" size={17} color={Colors.grey} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={[mainStyles.screen, { flex: 1 }]}>
      <Header headingTitle="About Us" navigation={navigation} />
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={data}
          renderItem={({ item }) => aboutUsItems(item)}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
  },
});

export default AboutUs;
