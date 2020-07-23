import React from "react";
import {ScrollView, StyleSheet, StatusBar, Text, View, Alert} from "react-native";
import {Input, Button} from "../components";

const Header: React.FC = () => {
    return(
        <View>
            <Text style={headerStyle.text}>Sign Up</Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    text:{
        fontSize: 34,
        lineHeight: 34,
        color: "#f7f7f7",
        fontWeight: "bold",
    },
});

const Footer: React.FC = () => {
    return <View style={{backgroundColor: "red", height: 120}} />
};

export const SignUp: React.FC = () => {
    return(
        <>
            {/* <StatusBar backgroundColor="#1E1F28" /> */}
            <ScrollView contentContainerStyle={style.container}>
                <View style={{flex: 1}}>
                    <Header />
                </View>
                <View>
                    <Input label="Name" />
                    <Input label="Email"/>
                    <Input label="Password"/>
                    <Button title="Sign Up" onPress={() => alert("Sign up")} />
                </View>
                <View style={{flex: 2, justifyContent: "flex-end"}}>
                    <Footer />
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1E1F28",
        paddingHorizontal: 16,
    },
});