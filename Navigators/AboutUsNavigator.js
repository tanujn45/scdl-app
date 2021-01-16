import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../Constants/Colors";
import AboutUs from "../screens/AboutUs/AboutUs";
import Director from "../screens/AboutUs/AboutUsDetails/Director";
import AboutSCDL from "../screens/AboutUs/AboutUsDetails/AboutSCDL";
import NewsAndEvents from "../screens/AboutUs/AboutUsDetails/NewsAndEvents";
import RankingAwards from "../screens/AboutUs/AboutUsDetails/RankingAwards";
import ScdlAdvantage from "../screens/AboutUs/AboutUsDetails/ScdlAdvantage";

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
          fontSize: Platform.OS === "ios" ? 22 : 18,
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
      <Stack.Screen name="Director" component={Director} />
      <Stack.Screen name="AboutSCDL" component={AboutSCDL} />
      <Stack.Screen name="NewsAndEvents" component={NewsAndEvents} />
      <Stack.Screen name="RankingAwards" component={RankingAwards} />
      <Stack.Screen name="ScdlAdvantage" component={ScdlAdvantage} />
    </Stack.Navigator>
  );
};
