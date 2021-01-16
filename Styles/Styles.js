import { Platform, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const mainStyles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    paddingTop: 15,
  },
  cardTouchContainer: {
    height: 100,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    // elevation: 5,
    overflow: "hidden",
  },
  cardContainer: {
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  cardContainerSpecific: {
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    height: 100,
    // marginVertical: 10,
    flexDirection: "row",
  },
  cardLeftContainer: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
  cardRightContainer: {
    width: "68%",
    justifyContent: "center",
    paddingLeft: 15,
  },
  cardImage: {
    width: 65,
    height: 65,
  },
  cardTitle: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    fontFamily: "robotoRegular",
  },
  cardLMContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardLMText: {
    color: Colors.grey,
    fontSize: Platform.OS === "ios" ? 15 : 13,
    paddingRight: 3,
    fontFamily: "robotoRegular",
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: Platform.OS === "ios" ? 20 : 17,
    color: "#000",
    textTransform: "uppercase",
  },
});

export { mainStyles };
