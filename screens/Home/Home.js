import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Header from "../../Components/Header";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight } from "react-native-gesture-handler";
import Colors from "../../Constants/Colors";

const Home = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      img: require("../../assets/icons/programs.png"),
      text: "Program",
      page: "ProgramsNavigator",
    },
    {
      key: "2",
      img: require("../../assets/icons/testimonial.png"),
      text: "Testimonials",
      page: "Testimonial",
    },
    {
      key: "3",
      img: require("../../assets/icons/impdates.png"),
      text: "Important Dates",
      page: "ImpDates",
    },
    {
      key: "3",
      img: require("../../assets/icons/contact.png"),
      text: "Contact",
      page: "Contact",
    },
  ]);

  return (
    <View style={mainStyles.screen}>
      <Header headingTitle="Home" navigation={navigation} />
      <Text style={styles.welcome}>
        Welcome to{"\n"}
        <Text style={{ color: Colors.secondary }}>
          Symbiosis Distance Learning Application
        </Text>
      </Text>
      <FlatGrid
        itemDimension={130}
        data={data}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => navigation.navigate(item.page)}
            underlayColor="transparent"
          >
            <View style={styles.squareCard}>
              <View style={{ padding: 10 }}>
                <Image style={styles.img} source={item.img}></Image>
              </View>
              <Text style={styles.heading}>{item.text}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 20,
  },
  img: {
    height: 70,
    width: 70,
    alignSelf: "center",
    marginTop: 24,
  },
  squareCard: {
    height: 180,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
  heading: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: "center",
    // fontWeight: "bold",
  },
});

export default Home;
