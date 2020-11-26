import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  getTheme,
  StyleProvider,
} from "native-base";
import platform from "../../../variables/platform";
import News from "./NewsAndEvents/News";
import Events from "./NewsAndEvents/Events";
import Conferences from "./NewsAndEvents/Conferences";
import RankingAndAwards from "./NewsAndEvents/RankingAndAwards";

const NewsAndEvents = (props) => {
  //   const [prev, setPrev] = useState(props.route.params);
  //   props.navigation.setOptions({ title: prev.name });

  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="News">
            <News />
          </Tab>
          <Tab heading="Events">
            <Events />
          </Tab>
          <Tab heading="Conferences">
            <Conferences />
          </Tab>
          <Tab heading="Ranking and awards">
            <RankingAndAwards />
          </Tab>
        </Tabs>
      </Container>
    </StyleProvider>
  );
};

export default NewsAndEvents;
