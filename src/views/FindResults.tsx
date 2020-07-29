import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button} from "../components";
import Search from "../assets/icons/Search.svg";

export const FindResults: React.FC = () => {
    return(
        <View style={style.container}>
            <Search/>
            <Text style={style.text}>Finding similar results...</Text>
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
        paddingTop:16,
        fontSize: 34,
        lineHeight: 34,
        color: "#f7f7f7",
        fontWeight: "bold",
        textAlign: "center",
    },
});