import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";

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
          name: "Energy Management",
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

  const SubProgramsItem = (item) => {
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

  return (
    <View style={[mainStyles.screen, { flex: 1 }]}>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            let len = item.programs.length;
            return (
              <View>
                <View style={styles.customHeaderContainer}>
                  <Text style={styles.customHeaderTitle}>{item.title}</Text>
                </View>
                <FlatList
                  style={styles.flatListContainer}
                  horizontal={true}
                  data={item.programs}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableHighlight
                        onPress={() =>
                          props.navigation.navigate("SubProgramDetails", item)
                        }
                        style={[
                          mainStyles.cardContainer,
                          styles.cardContainer,
                          index === 0
                            ? { marginLeft: 20, marginRight: 10 }
                            : { marginHorizontal: 10 },
                          index === len - 1
                            ? { marginLeft: 10, marginRight: 20 }
                            : { marginHorizontal: 10 },
                        ]}
                      >
                        <View
                          style={[
                            mainStyles.cardContainer,
                            styles.cardContainer,
                          ]}
                        >
                          <Image
                            style={mainStyles.cardImage}
                            source={item.image}
                          ></Image>
                          <Text style={styles.cardTitle}>{item.name}</Text>
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
  flatListContainer: {
    flex: 1,
  },
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
    flexDirection: "column",
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "robotoRegular",
    width: "80%",
    marginTop: 20,
    textAlign: "center",
  },
});

export default ProgramDetails;
