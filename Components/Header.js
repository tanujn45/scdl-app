import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

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
    marginTop: Platform.OS === "ios" ? 25 : 25,
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
    fontSize: Platform.OS === "ios" ? 22 : 18,
    fontWeight: "bold",
    marginLeft: 40,
  },
});

export default Header;
