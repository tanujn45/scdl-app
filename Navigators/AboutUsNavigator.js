import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../Constants/Colors";
import AboutUs from "../screens/AboutUs/AboutUs";
import AboutUsDetails from "../screens/AboutUs/AboutUsDetails";

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
      initialRouteName="AboutUs"
    >
      <Stack.Screen
        name="About Us"
        component={AboutUs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AboutUsDetails" component={AboutUsDetails} />
    </Stack.Navigator>
  );
};
