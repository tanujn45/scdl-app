import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from "react-native";
import { mainStyles } from "../../../Styles/Styles";
import Colors from "../../../Constants/Colors";

const Director = (props) => {
  console.log(props);
  props.navigation.setOptions({ title: props.route.params.title });
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.img}
          source={require("../../../assets/img/directors-img.jpg")}
        ></Image>
        <Text style={styles.heading}>Dr. Swati. S. Mujumdar</Text>
        <Text style={styles.paragraph}>
          Principal Director, Symbiosis Open Education Society Director,
          Symbiosis Centre for Distance Learning
        </Text>
        <Text style={styles.paragraph}>
          Global boundaries are vanishing, merging people of diverse cultures,
          nationalities and age groups. Education is emerging as the most
          powerful platform in the ' boundary less' world. Distance learning
          opens new dimensions of opportunities for students to obtain higher
          education without the constraint of location and time. Symbiosis
          Centre for Distance Learning (SCDL) offers a chance to enhance your
          career and life through the medium of quality education.
        </Text>
        <Text style={styles.paragraph}>
          Symbiosis Centre for Distance Learning (SCDL) has pioneered in India
          interactive e-learning content in the curriculum as a supplementary
          learning methodology, in order to improve the understanding of
          concepts through cases and examples. SCDL has for the first time in
          India, introduced online assessment systems, to pursue our mission of
          providing learners with flexible learning opportunities anywhere,
          anytime and to provide ultimate convenience, ease and flexibility to
          our students.
        </Text>
        <Text style={styles.paragraph}>
          The Corporate Business Administration program has also gained
          tremendous popularity and SCDL is now an education provider to leading
          companies in India, such as IBM, Cognizant, Infosys, Wipro, Ranbaxy,
          Collabera, Aditya Birla, Bharti Retail Pvt. Ltd., Wall-mart, Vodafone,
          Cipla, etc.
        </Text>
        <Text style={styles.paragraph}>
          SCDL has been invited by foreign universities for collaboration; a
          mark of our excellent quality education. I welcome each one of you to
          our 'Global Campus' where latest technology, innovative teaching
          methodologies and quality education are blended together to create
          unique learning experiences.
        </Text>
      </View>
    </ScrollView>
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
    borderColor: Colors.primary,
    borderWidth: 4,
    borderRadius: 40,
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
});

export default Director;
