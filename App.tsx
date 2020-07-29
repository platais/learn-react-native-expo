import React from 'react';
import "react-native-gesture-handler"
import { View, Text, Button } from 'react-native';
import storybook from './storybook';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";
import {PaymentCards} from "./src/views/PaymentCards";
import {MainScreen} from "./src/views/MainScreen";
import {SignIn} from "./src/views/SignIn";
import {BottomNavBarTwo} from "./src/components/BottomNavBarTwo";

const Tab = createBottomTabNavigator();

export const App: React.FC =() => {
  return(
      <BottomNavBarTwo/>
  );
};

 const IS_STORYBOOK = false;
 export default (IS_STORYBOOK ? storybook : App)
