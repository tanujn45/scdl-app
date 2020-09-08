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
import Colors from "../Constants/Colors";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerBackTitleStyle: {
          color: "black",
        },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
      }}
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
