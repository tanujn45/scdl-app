import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Programs from "../screens/Programs/Programs";
import { createStackNavigator } from "@react-navigation/stack";
import ProgramDetails from "../screens/Programs/ProgramDetails";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      initialRouteName="Programs"
    >
      <Stack.Screen
        name="Programs"
        component={Programs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProgramDetails"
        component={ProgramDetails}
        options={{ name: "Program Details" }}
      />
    </Stack.Navigator>
  );
};
