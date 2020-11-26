import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { mainStyles } from "../../Styles/Styles";
import Colors from "../../Constants/Colors";
import Header from "../../Components/Header";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const Testimonial = (item) => {
  return (
    <ScrollView>
      <Header headingTitle="Important Dates" navigation={navigation} />
      <View>
        <Text>tanuj namdeo</Text>
      </View>
    </ScrollView>
  );
};

export default Testimonial;
