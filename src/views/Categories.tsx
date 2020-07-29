import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {Button} from "../components";
import {CategoryCard} from "../components/CategoryCard";

export const Categories:React.FC<{ navigation: StackNavigationProp<any>}> = ({navigation}) => {
    return(
        <View style={style.container}>
            <CategoryCard title="Some text here" onPress={() => navigation.navigate("Profile")}/>
            
        </View>
    );
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