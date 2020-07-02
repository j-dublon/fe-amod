import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Quotes from "../screens/Quotes";
import Header from "../shared/Header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerTransparent: true,
    },
  },
  Quotes: {
    screen: Quotes,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { height: 120 },
  },
});

export default createAppContainer(HomeStack);
