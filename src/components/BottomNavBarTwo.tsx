import React,{ ReactNode } from "react";
import "react-native-gesture-handler"
import { View, Text, StyleSheet, Image} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";
import {MainScreen} from "../views/MainScreen";
import {SignIn} from "../views/SignIn";
import {PaymentCards} from "../views/PaymentCards";
const HomeInactive = require("../assets/icons/HomeInactive.svg") as string;
const HomeActive = require("../assets/icons/HomeActive.svg") as string; 
const CartInactive = require("../assets/icons/CartInactive.svg") as string;
const CartActive = require("../assets/icons/CartActive.svg") as string; 
const BagInactive = require("../assets/icons/BagInactive.svg") as string;
const BagActive = require("../assets/icons/BagActive.svg") as string; 
const HeartInactive = require("../assets/icons/HeartInactive.svg") as string;
const HeartActive = require("../assets/icons/HeartActive.svg") as string;
const ProfileInactive = require("../assets/icons/ProfileInactive.svg") as string;
const ProfileActive = require("../assets/icons/ProfileActive.svg") as string;

const Tab = createBottomTabNavigator();

export const BottomNavBarTwo: React.FC =() => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Settings" component={SignIn}/>
        <Tab.Screen name="payments" component={PaymentCards}/>
      </Tab.Navigator>
    </NavigationContainer>
);
  };