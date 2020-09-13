import React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const Header = (props) => {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableHighlight
        style={styles.headerTouchContainer}
        underlayColor="#DDDDDD"
        onPress={openDrawer}
      >
        <Feather name="menu" size={22} />
      </TouchableHighlight>
      <Text style={styles.heading}>{props.headingTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  headerTouchContainer: {
    left: 10,
    padding: 12,
    borderRadius: 40,
  },
  heading: {
    right: 15,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 40,
  },
});

export default Header;
