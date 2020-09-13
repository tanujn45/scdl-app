import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import { FlatList } from "react-native-gesture-handler";

const ProgramDetails = (props) => {
  const [prev, setPrev] = useState(props.route.params);
  props.navigation.setOptions({ title: prev.title });

  //Post Graduation Diploma
  const [data, setData] = useState([
    {
      key: "1",
      title: "Post Graduation Diploma",
      programs: [
        {
          name: "Business Administration",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "International Business",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Banking and Financial Services",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Human Resource Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Insurance Business Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Retail Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Customer Relationship Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Supply Chain Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Export and Import Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Business and Corporate Laws",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Personnel & HRM [LL]",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Project Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Energy Management [Renewable Energy]",
          image: require("../../assets/programs/team.png"),
        },
      ],
    },
    {
      key: "2",
      title: "Post Graduation Certificate",
      programs: [
        {
          name: "Entrepreneurship Development",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Event Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Cyber Laws",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Taxation Laws",
          image: require("../../assets/programs/team.png"),
        },
        {
          name: "Management Accounting",
          image: require("../../assets/programs/team.png"),
        },
      ],
    },
  ]);

  // {
  //       key: "3",
  //       title: "Certificate Program",
  //       programs: [
  //         {
  //           name: "Building an Online Business",
  //           image: require("../../assets/programs/team.png"),
  //         },
  //         {
  //           name: "Disaster Management",
  //           image: require("../../assets/programs/team.png"),
  //         },
  //         {
  //           name: "IPR and Patent Law",
  //           image: require("../../assets/programs/team.png"),
  //         },
  //         {
  //           name: "Virtual Workplace Management",
  //           image: require("../../assets/programs/team.png"),
  //         },
  //         {
  //           name: "Single Courses",
  //           image: require("../../assets/programs/team.png"),
  //         },
  //       ],
  //     },

  const SubProgramsItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() => props.navigation.navigate("SubProgramDetails", item)}
      >
        <View style={[mainStyles.cardContainer, styles.cardContainer]}>
          {/* <Image style={mainStyles.cardImage} source={item.image}></Image> */}
          <Text style={styles.cardTitle}>tanuj</Text>
        </View>
      </TouchableHighlight>
    );
  };

  const ProgramsItem = (item) => {
    return (
      <View>
        <View style={styles.customHeaderContainer}>
          <Text style={styles.customHeaderTitle}>{item.title}</Text>
        </View>
        <FlatList
          horizontal={true}
          data={item.programs}
          renderItem={({ subItem }) => SubProgramsItem(subItem)}
        />
      </View>
    );
  };

  return (
    <View style={mainStyles.screen}>
      <View>
        <FlatList data={data} renderItem={({ item }) => ProgramsItem(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customHeaderContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
    backgroundColor: Colors.secondary,
    width: "85%",
    height: 55,
    borderTopLeftRadius: 25,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  customHeaderTitle: {
    fontSize: 17,
    paddingRight: 30,
    color: "white",
    textTransform: "uppercase",
    fontFamily: "robotoBold",
  },
  cardContainer: {
    height: 170,
    width: 170,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "robotoRegular",
    marginTop: 20,
  },
});

export default ProgramDetails;
