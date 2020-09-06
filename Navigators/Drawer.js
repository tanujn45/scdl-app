import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Home from "../screens/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, Avatar } from "@ui-kitten/components";
import { mainStyles } from "../Styles/Styles";
import Colors from "../Constants/Colors";
import { Feather } from "@expo/vector-icons";

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
        <Card style={styles.drawerContainer}>
          <Avatar
            style={styles.logoContainer}
            shape="square"
            source={require("../assets/img/symbiosis.png")}
          />
        </Card>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("ProgramsNavigator")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("ProgramsNavigator")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("ProgramsNavigator")}
        labelStyle={styles.drawerOptionText}
        style={styles.drawerOptionBack}
      />
      <View style={styles.drawerBorder} />
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
