import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from '../../../Constants/Colors'

const Overview = (props) => {
  return (
    <View>
      <Text style={styles.paragraph}>
        The international business environment is dynamic. A new and very different market reality is emerging. Students of today need to adopt flexible patterns of thinking and behaviour to succeed as the managers of tomorrow. Post Graduate Diploma in International Business program has been designed to explore in detail the nature and implications of these changes and provide students with the skills and mind-sets that will allow them to operate effectively within and lead the organisations of the future.
        </Text>
        <Text style={styles.paragraph}>
        The participants learn export-import policies, documentation, international finance, in addition to the functioning of various financial institutes and banking. The program emphasises the contemporary issues including international commercial law and business environment. Knowledge of India's foreign trade along with international marketing prepares the students to strike the right note when they enter the demanding world of corporate management.
      </Text>
      <Text style={styles.heading}>Carreer Opportunities</Text>
      <Text style={styles.paragraph}>
        Business Development Manager, International Marketing Manager, International Financial Analyst, International Product Manager, Procurement Manager in an Import-Export House etc.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginHorizontal: 10,
    marginVertical: 15,
    fontFamily: 'robotoRegular',
    lineHeight: 20,
    fontSize: 15,
  },
  heading: {
    fontFamily: 'robotoBold',
    fontSize: 30,
    marginHorizontal: 10,
color: Colors.secondary,
  }
});

export default Overview;
