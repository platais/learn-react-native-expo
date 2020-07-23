import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button} from "../components";

export const SuccessLight: React.FC = () => {
    return(
        <View style={style.container}>
            <Text style={style.text}>Success!</Text>
            <Text style={style.textSmall}>Your order will be delivered soon.</Text>
            <Text style={style.textSmall}>Thank you for choosing our app. </Text>
            <Button title="Continue shopping" onPress={() => alert("Good luck")} />
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "yellow",
        paddingHorizontal: 16,
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 34,
        lineHeight: 34,
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
    },
    textSmall:{
        fontSize: 14,
        lineHeight: 24,
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
    },
});