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
  const { title, subDetails } = props.route.params;
  console.log(subDetails);
  props.navigation.setOptions({ title: title });

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
          data={subDetails}
          renderItem={({ item }) => {
            let len = item.subCourses.length;
            return (
              <View>
                <View style={styles.customHeaderContainer}>
                  <Text style={styles.customHeaderTitle}>{item.course}</Text>
                </View>
                <FlatList
                  style={styles.flatListContainer}
                  horizontal={true}
                  data={item.subCourses}
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
                          <Text style={styles.cardTitle}>{item.subCourse}</Text>
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
