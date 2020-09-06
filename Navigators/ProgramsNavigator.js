import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Programs from "../screens/Programs/Programs";
import Home from "../screens/Home/Home";
import ImpDates from "../screens/ImpDates/ImpDates";
import Contact from "../screens/Contact/Contact";
import { createStackNavigator } from "@react-navigation/stack";
import { mainStyles } from "../Styles/Styles";
import Colors from "../Constants/Colors";
import { Feather } from "@expo/vector-icons";
import ProgramDetails from "../screens/Programs/ProgramDetails";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Programs"
    >
      <Stack.Screen name="ProgramDetails" component={ProgramDetails} />
      <Stack.Screen name="Programs" component={Programs} />
    </Stack.Navigator>
  );
};
