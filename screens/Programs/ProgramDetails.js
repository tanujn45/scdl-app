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
import _ from "lodash";

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
          key: "1",
          name: "Business Administration",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "2",
          name: "International Business",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "3",
          name: "Banking and Financial Services",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "4",
          name: "Human Resource Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "5",
          name: "Insurance Business Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "6",
          name: "Retail Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "7",
          name: "Customer Relationship Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "8",
          name: "Supply Chain Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "9",
          name: "Export and Import Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "10",
          name: "Business and Corporate Laws",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "11",
          name: "Personnel & HRM [LL]",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "12",
          name: "Project Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "13",
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
          key: "1",
          name: "Entrepreneurship Development",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "2",
          name: "Event Management",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "3",
          name: "Cyber Laws",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "4",
          name: "Taxation Laws",
          image: require("../../assets/programs/team.png"),
        },
        {
          key: "5",
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
    console.log(item);
    return (
      <TouchableHighlight
        onPress={() => props.navigation.navigate("SubProgramDetails", item)}
      >
        <View style={[mainStyles.cardContainer, styles.cardContainer]}>
          {/* <Image style={mainStyles.cardImage} source={item.image}></Image> */}
          <Text style={styles.cardTitle}></Text>
        </View>
      </TouchableHighlight>
    );
  };

  const ProgramsItem = async (item) => {
    let programs = await item.programs;
    return (
      <View>
        <View style={styles.customHeaderContainer}>
          <Text style={styles.customHeaderTitle}>{item.title}</Text>
        </View>
        <FlatList
          horizontal={true}
          data={[programs]}
          renderItem={({ subItem }) => SubProgramsItem(subItem)}
        />
      </View>
    );
  };

  // console.log(typeof data);
  return (
    <View style={mainStyles.screen}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View>
                <View style={styles.customHeaderContainer}>
                  <Text style={styles.customHeaderTitle}>{item.title}</Text>
                </View>
                <FlatList
                  horizontal={true}
                  data={item.programs}
                  renderItem={({ subItem }) => {
                    console.log(subItem);
                    return (
                      <TouchableHighlight
                        onPress={() =>
                          props.navigation.navigate(
                            "SubProgramDetails",
                            subItem
                          )
                        }
                      >
                        <View
                          style={[
                            mainStyles.cardContainer,
                            styles.cardContainer,
                          ]}
                        >
                          {/* <Image style={mainStyles.cardImage} source={item.image}></Image> */}
                          <Text style={styles.cardTitle}>{subItem}</Text>
                        </View>
                      </TouchableHighlight>
                    );
                  }}
                />
              </View>
            );
          }}
        />
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
