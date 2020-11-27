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

const RankingAwards = (props) => {
  props.navigation.setOptions({ title: props.route.params.title });
  return (
    <ScrollView>
      <View>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image
            style={styles.img}
            source={require("../../../assets/img/rank_1.png")}
          ></Image>
          <Text style={styles.paragraph}>
            Symbiosis Centre for Distance Learning has been ranked 1st amongst
            the top Distance Learning Institutes for student learning experience
            by Careers 360 Rating 2012.
          </Text>
        </View>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image
            style={styles.img}
            source={require("../../../assets/img/rank_2.png")}
          ></Image>
          <Text style={styles.paragraph}>
            Symbiosis Centre for Distance Learning has been ranked 2nd amongst
            the Leading Institutes , by DNA Indus Learning Survey 2012.
          </Text>
        </View>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image
            style={styles.img}
            source={require("../../../assets/img/rank_3.png")}
          ></Image>
          <Text style={styles.paragraph}>
            Symbiosis Centre for Distance Learning has been ranked 3rd amongst
            the Top Distance Learning Institutes - by Competition Success
            Review.
          </Text>
        </View>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image
            style={styles.img}
            source={require("../../../assets/img/rank_4.png")}
          ></Image>
          <Text style={styles.paragraph}>
            IT Award for HRD through quality Distance Education: SCDL has won
            the Maharashtra Government's IT Award for Human Resource Development
            through quality Distance Education and innovative use of ICT. The
            award will be given by the hands of Hon'ble Chief Minister of
            Maharashtra.
          </Text>
        </View>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Image
            style={styles.img}
            source={require("../../../assets/img/outlook.jpg")}
          ></Image>
          <Text style={styles.paragraph}>
            Symbiosis Centre for Distance Learning has been ranked 8th amongst
            the Best Distance Learning Institutes - by Outlook.
          </Text>
        </View>
        <View style={[mainStyles.cardContainer, styles.card]}>
          <Text style={styles.paragraph}>
            Nomination for award by ICDE: SCDL was nominated for the
            Institutional Excellence award by the prestigious International
            Council for Distance Education (ICDE) an apex body promoting open
            and distance education in the world.f Maharashtra.
          </Text>
        </View>
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
  card: {
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 5,
    paddingTop: 10,
  },
});

export default RankingAwards;
