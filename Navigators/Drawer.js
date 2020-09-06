import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Home from "../screens/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" />
      <DrawerItem label="Home" />
      <DrawerItem label="Home" />
    </DrawerContentScrollView>
  );
};

const Screens = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    marginTop: 60,
  },
});
