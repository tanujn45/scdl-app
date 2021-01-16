import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  getTheme,
  StyleProvider,
} from "native-base";
import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import platform from "../../variables/platform";
import Overview from "./subProgramDetails/Overview";
import Eligibility from "./subProgramDetails/Eligibility";
import Duration from "./subProgramDetails/Duration";
import Fees from "./subProgramDetails/Fees";
import ProgramStruture from "./subProgramDetails/ProgramStruture";

const SubProgramDetails = (props) => {
  const [prev, setPrev] = useState(props.route.params);
  props.navigation.setOptions({ title: "Details" });

  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Overview">
            <Overview overview={prev.overview} careerOpp={prev.careerOpp} />
          </Tab>
          <Tab heading="Eligibility">
            <Eligibility content={prev.eligibility} />
          </Tab>
          <Tab heading="Duration">
            <Duration durationValidity={prev.durationValidity} />
          </Tab>
          <Tab heading="Program Structure">
            <ProgramStruture progStruct={prev.programStruct} />
          </Tab>
        </Tabs>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  customHeaderContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
    backgroundColor: Colors.primary,
    width: "85%",
    height: 55,
    borderTopLeftRadius: 25,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  customHeaderTitle: {
    fontSize: 17,
    paddingRight: 30,
    color: "white",
    textTransform: "uppercase",
    fontFamily: "robotoBold",
  },
  cardContainer: {
    height: 170,
    width: 170,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "robotoRegular",
    marginTop: 20,
  },
});

export default SubProgramDetails;
