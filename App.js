import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { AppLoading } from "expo";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import Landing from "./screens/Landing/Landing";
import Drawer from "./Navigators/Drawer";
import Home from "./screens/Home/Home";

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
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({});
