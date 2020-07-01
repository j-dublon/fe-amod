import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Quotes from "../screens/Quotes";

const screens = {
  Home: {
    screen: Home,
  },
  Quotes: {
    screen: Quotes,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
