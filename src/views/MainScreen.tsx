import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Button} from "../components/Button";
import { CategoryCard } from "../components";


export const MainScreen: React.FC<{ navigation: StackNavigationProp<any>}> = ({navigation}) => {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home !</Text>
        <Button onPress={() => navigation.navigate("Profile")} title="Go To Settings" />
        <CategoryCard title="Some text here" onPress={() => navigation.navigate("Profile")}/>
       </View>
    )
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1E1F28",
        paddingHorizontal: 16,
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 34,
        lineHeight: 34,
        color: "#F5F5F5",
        fontWeight: "bold",
        textAlign: "center",
    },
    textSmall:{
        fontSize: 14,
        lineHeight: 24,
        color: "#F5F5F5",
        fontWeight: "bold",
        textAlign: "center",
    },
});