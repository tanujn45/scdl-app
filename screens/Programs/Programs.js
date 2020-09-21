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
      about:
        'Management (or managing) is the administration of an organization, whether it is a business, a not-for-profit organization, or government body. Management includes the activities of setting the strategy of an organization and coordinating the efforts of its employees (or of volunteers) to accomplish its objectives through the application of available resources, such as financial, natural, technological, and human resources. The term "management" may also refer to those people who manage an organization - individually: managers.',
    },
    {
      key: "2",
      image: require("../../assets/programs/graphic-design.png"),
      title: "Design",
      about:
        "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity. The design usually has to satisfy certain goals and constraints, may take into account aesthetic, functional, economic, or socio-political considerations, and is expected to interact with a certain environment. Major examples of designs include architectural blueprints, engineering drawings, business processes, circuit diagrams, and sewing patterns.",
    },
    {
      key: "3",
      image: require("../../assets/programs/data.png"),
      title: "Information Technology",
      about:
        "Information technology (IT) is the use of computers to store, retrieve, transmit, and manipulate data[1] or information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.[2] IT is considered to be a subset of information and communications technology (ICT). An information technology system (IT system) is generally an information system, a communications system or, more specifically speaking, a computer system – including all hardware, software and peripheral equipment – operated by a limited group of users.",
    },
    {
      key: "4",
      image: require("../../assets/programs/user.png"),
      title: "Education, Humanities ",
      about:
        "Humanities are academic disciplines that study aspects of human society and culture. In the Renaissance, the term contrasted with divinity and referred to what is now called classics, the main area of secular study in universities at the time. Today, the humanities are more frequently contrasted with natural, and sometimes social sciences, as well as professional training.",
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
