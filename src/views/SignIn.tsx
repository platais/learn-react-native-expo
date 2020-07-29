import React from "react";
import {ScrollView, StyleSheet, Text, View, Alert} from "react-native";
import {Input, Button} from "../components";
// const IconGoogle = require("../assets/icons/Google.svg") as string;
// const IconFB = require("../assets/icons/Facebook.svg") as string;
import IconGoogle from "../assets/icons/Google.svg" ;
import IconFB from "../assets/icons/Facebook.svg" ;
const Header: React.FC = () => {
    return(
        <View style={headerStyle.container}>
            <Text style={headerStyle.text}>Login</Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    container:{
        marginTop:20,
    },
    text:{
        fontSize: 34,
        lineHeight: 34,
        color: "#f7f7f7",
        fontWeight: "bold",
    },
});

const Footer: React.FC = () => {
   return (
        <View style={footerStyle.container} > 
            <Button title="Google" onPress={() => alert("Google")} icon={<IconGoogle/>}/>
            <Button title="Facebook" onPress={() => alert("Facebook")} icon={<IconFB/>}/> 
        </View>
        );
    };

    const footerStyle = StyleSheet.create({
        container:{
            flex:1, 
            flexDirection:"row", 
            paddingVertical:16, 
            height: 50, 
            justifyContent:"center"
        }
        
    });

export const SignIn: React.FC = () => {
    return(
        <>
            {/* <StatusBar backgroundColor="#1E1F28" /> */}
            <ScrollView contentContainerStyle={style.container}>
                <View style={{flex: 1}}>
                    <Header />
                </View>

                <View>
                    <Input label="Name" />
                    <Input label="Password"/>
                    <Button title="Log In" onPress={() => alert("Sign up")} />
                </View>
                <View>
                    <Text style={style.text}>Forgot password</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent: "flex-end"}}>
                    <Footer/>
                </View>

                  <View style={{flex: 2, justifyContent: "flex-end"}}>
                    {/* <BottomNavBar/> */}
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
    text:{
        fontSize: 14,
        lineHeight: 34,
        color: "white",
        textAlign: "right"
    },
});