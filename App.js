import React from "react";
import { AppLoading } from "expo";
import Landing from "./screens/Landing/Landing";
import Drawer from "./Navigators/Drawer";
import Header from "./Components/Header";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    robotoRegular: Roboto_400Regular,
    robotoBold: Roboto_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landing"
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
