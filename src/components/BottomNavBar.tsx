import React,{ ReactNode } from "react";
import "react-native-gesture-handler"
import { View, Text, StyleSheet, Image} from "react-native";
import {NavigationContainer, StackNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../views/MainScreen";
import {SignIn} from "../views/SignIn";
import {Categories} from "../views/Categories";
import {PaymentCards} from "../views/PaymentCards";
import HomeInactive from "../assets/icons/HomeInactive.svg";
import HomeActive from "../assets/icons/HomeActive.svg"; 
import CartInactive from "../assets/icons/CartInactive.svg";
import CartActive from "../assets/icons/CartActive.svg"; 
import BagInactive from "../assets/icons/BagInactive.svg";
import BagActive from "../assets/icons/BagActive.svg"; 
import HeartInactive from "../assets/icons/HeartInactive.svg";
import HeartActive from "../assets/icons/HeartActive.svg";
import ProfileInactive from "../assets/icons/ProfileInactive.svg";
import ProfileActive from "../assets/icons/ProfileActive.svg";

const Tab = createBottomTabNavigator();

export const BottomNavBar: React.FC =() => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} options={{tabBarIcon:({ focused }) => (focused?<HomeActive />:<HomeInactive />)}} />
        <Tab.Screen name="Shop" component={MainScreen} options={{tabBarIcon:({ focused }) => (focused?<CartActive/>:<CartInactive/>)}} />
        <Tab.Screen name="Bag" component={SignIn} options={{tabBarIcon:({ focused }) => (focused?<BagActive/>:<BagInactive/>)}}/>
        <Tab.Screen name="Favourites" component={Categories} options={{tabBarIcon:({ focused }) => (focused?<HeartActive/>:<HeartInactive/>)}}/>
        <Tab.Screen name="Profile" component={PaymentCards} options={{tabBarIcon:({ focused }) => (focused?<ProfileActive />:<ProfileInactive />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
);
  };