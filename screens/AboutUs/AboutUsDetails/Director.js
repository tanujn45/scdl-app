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

const Director = () => {
  return (
    <ScrollView>
      <View>
        <Image></Image>
        <Text>Dr. Swati. S. Mujumdar</Text>
        <Text>
          Principal Director, Symbiosis Open Education Society Director,
          Symbiosis Centre for Distance Learning
        </Text>
        <Text>
          Global boundaries are vanishing, merging people of diverse cultures,
          nationalities and age groups. Education is emerging as the most
          powerful platform in the ' boundary less' world. Distance learning
          opens new dimensions of opportunities for students to obtain higher
          education without the constraint of location and time. Symbiosis
          Centre for Distance Learning (SCDL) offers a chance to enhance your
          career and life through the medium of quality education.
        </Text>
        <Text>
          Symbiosis Centre for Distance Learning (SCDL) has pioneered in India
          interactive e-learning content in the curriculum as a supplementary
          learning methodology, in order to improve the understanding of
          concepts through cases and examples. SCDL has for the first time in
          India, introduced online assessment systems, to pursue our mission of
          providing learners with flexible learning opportunities anywhere,
          anytime and to provide ultimate convenience, ease and flexibility to
          our students.
        </Text>
        <Text>
          The Corporate Business Administration program has also gained
          tremendous popularity and SCDL is now an education provider to leading
          companies in India, such as IBM, Cognizant, Infosys, Wipro, Ranbaxy,
          Collabera, Aditya Birla, Bharti Retail Pvt. Ltd., Wall-mart, Vodafone,
          Cipla, etc.
        </Text>
        <Text>
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

export default Director;
