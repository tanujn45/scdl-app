import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { AppLoading } from "expo";
import Landing from "./screens/Landing/Landing";
import Drawer from "./Navigators/Drawer";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    monRegular: Montserrat_400Regular,
    monBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
