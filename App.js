import React from "react";
import { StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import Landing from "./screens/Landing/Landing";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  useFonts({
    monRegular: Montserrat_400Regular,
    monBold: Montserrat_700Bold,
  });

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Landing />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({});
