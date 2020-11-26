import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import ProgramDetails from "./ProgramDetails";

const Program = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      image: require("../../assets/programs/team.png"),
      title: "Management",
    },
    {
      key: "2",
      image: require("../../assets/programs/graphic-design.png"),
      title: "Design",
    },
    {
      key: "3",
      image: require("../../assets/programs/data.png"),
      title: "Information Technology",
    },
    {
      key: "4",
      image: require("../../assets/programs/user.png"),
      title: "Education, Humanities ",
    },
  ]);

  const ProgramsItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate("ProgramDetails", item)}
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
      <Header headingTitle="Programs" navigation={navigation} />
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={data}
          renderItem={({ item }) => ProgramsItem(item)}
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

export default Program;
