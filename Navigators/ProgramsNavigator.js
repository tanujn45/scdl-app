import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../Constants/Colors";
import Programs from "../screens/Programs/Programs";
import ProgramDetails from "../screens/Programs/ProgramDetails";
import SubProgramDetails from "../screens/Programs/SubProgramDetails";

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
      <Stack.Screen name="ProgramDetails" component={ProgramDetails} />
      <Stack.Screen name="SubProgramDetails" component={SubProgramDetails} />
    </Stack.Navigator>
  );
};
