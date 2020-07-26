import React from 'react';
import "react-native-gesture-handler"
import { View, Text, Button } from 'react-native';
import storybook from './storybook';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StackNavigationProp} from "@react-navigation/stack";


const Tab = createBottomTabNavigator();

const HomeScreen:React.FC<{ navigation: StackNavigationProp<any>}> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home !</Text>
      <Button onPress={() => navigation.navigate("Settings")} title="Go To Settings"/>
    </View>
  );
}

const SettingsScreen:React.FC =() => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings !</Text>
    </View>
  );
}

export const App: React.FC =() => {
  return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

 const IS_STORYBOOK = true;
 export default (IS_STORYBOOK ? storybook : App)
