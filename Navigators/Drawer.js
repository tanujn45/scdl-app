import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Programs from "../screens/Programs/Programs";
import Home from "../screens/Home/Home";
import ImpDates from "../screens/ImpDates/ImpDates";
import Contact from "../screens/Contact/Contact";
import { createStackNavigator } from "@react-navigation/stack";
import { mainStyles } from "../Styles/Styles";
import Colors from "../Constants/Colors";
import { Feather } from "@expo/vector-icons";
import ProgramsNavigator from "./ProgramsNavigator";
import Header from "../Components/Header";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomDrawerContent = (props) => {
  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.screen}>
        <TouchableHighlight
          style={styles.backArrowContainer}
          underlayColor={Colors.primary}
          onPress={closeDrawer}
        >
          <Feather name="arrow-left" size={26} color="white" />
        </TouchableHighlight>
        <View style={[mainStyles.cardContainer, styles.drawerContainer]}>
          <Image
            style={styles.logoContainer}
            source={require("../assets/img/symbiosis.png")}
          />
        </View>
      </View>
      {/* <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} />
      <DrawerItem
        label="Programs"
        onPress={() => props.navigation.navigate("ProgramsNavigator")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} />
      <DrawerItem
        label="Important Dates"
        onPress={() => props.navigation.navigate("ImpDates")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} />
      <DrawerItem
        label="Contact Us"
        onPress={() => props.navigation.navigate("Contact")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} /> */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// const Screens = () => {
//   const setHeaderLeft = {};
//   return (
//     <Stack.Navigator
//       mode="screen"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: Colors.background,
//         },
//         headerTintColor: "black",
//         headerTitleStyle: {
//           fontFamily: "robotoRegular",
//           fontSize: 20,
//         },
//       }}
//     ></Stack.Navigator>
//   );
// };

export default () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "black",
        activeBackgroundColor: Colors.background,
        labelStyle: {
          fontSize: 17,
          fontFamily: "robotoRegular",
          textTransform: "uppercase",
          letterSpacing: 0.7,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: (props) => <Header navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="ProgramsNavigator"
        component={ProgramsNavigator}
        options={({ navigation }) => ({
          title: "Programs",
          headerLeft: (props) => <Header navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="ImpDates"
        component={ImpDates}
        options={({ navigation }) => ({
          title: "Important Dates",
          headerLeft: (props) => <Header navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={({ navigation }) => ({
          title: "Contact Us",
          headerLeft: (props) => <Header navigation={navigation} />,
        })}
      />
      {/* <Drawer.Screen name="Screens" component={Screens} /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
  backArrowContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 5,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  drawerContainer: {
    justifyContent: "center",
    height: 120,
    width: 120,
    borderRadius: 15,
  },
  logoContainer: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  drawerOptionText: {
    fontSize: 18,
    color: "#383838",
    paddingLeft: 15,
    textTransform: "capitalize",
    paddingVertical: 2,
    marginBottom: -13,
    width: 280,
    height: 40,
    fontFamily: "robotoRegular",
  },
  drawerOptionBack: {
    marginVertical: 1,
    marginHorizontal: 2,
    backgroundColor: "#fff",
  },
  drawerBorder: {
    width: "87%",
    height: 1,
    alignSelf: "center",
    backgroundColor: "#ccc",
  },
});
