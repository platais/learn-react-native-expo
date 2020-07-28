import React from "react";
import {Text, View, StyleSheet} from "react-native";


export const MainScreen: React.FC = () => {
    return(
        <View>
            <Text>Main !</Text>
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