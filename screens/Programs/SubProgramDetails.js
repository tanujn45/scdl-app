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

const SubProgramDetails = (props) => {
  console.log(props);
  props.navigation.setOptions({ title: props.route.params.name });
  const [data, setData] = useState([
    {
      key: "1",
      title: "Business Administration",
      details: [
        {
          key: "1",
          name: "Overview",

        }
      ]
    },
//    {
//      key: "2",
//      image: require("../../assets/programs/graphic-design.png"),
//      title: "Design",
//      about:
//        "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity. The design usually has to satisfy certain goals and constraints, may take into account aesthetic, functional, economic, or socio-political considerations, and is expected to interact with a certain environment. Major examples of designs include architectural blueprints, engineering drawings, business processes, circuit diagrams, and sewing patterns.",
//    },
//    {
//      key: "3",
//      image: require("../../assets/programs/data.png"),
//      title: "Information Technology",
//      about:
//        "Information technology (IT) is the use of computers to store, retrieve, transmit, and manipulate data[1] or information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.[2] IT is considered to be a subset of information and communications technology (ICT). An information technology system (IT system) is generally an information system, a communications system or, more specifically speaking, a computer system – including all hardware, software and peripheral equipment – operated by a limited group of users.",
//    },
//    {
//      key: "4",
//      image: require("../../assets/programs/user.png"),
//      title: "Education, Humanities ",
//      about:
//        "Humanities are academic disciplines that study aspects of human society and culture. In the Renaissance, the term contrasted with divinity and referred to what is now called classics, the main area of secular study in universities at the time. Today, the humanities are more frequently contrasted with natural, and sometimes social sciences, as well as professional training.",
//    },
  ]);

  return (
    <View>
      
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
    // borderBottomLeftRadius: 25,
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

export default SubProgramDetails;
