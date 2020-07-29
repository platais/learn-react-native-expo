import React,{ ReactNode } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image} from "react-native";
import { useCallback } from "@storybook/addons";
import {MainScreen} from "../views/MainScreen";

// const Home =()=> {
// <Image 
//     style={{width:40, height:40}}
//     width={40} 
//     height={40}
//     source={{uri: "https://via.placeholder.com/120"}}
//     />
const CardImg =()=> {
    return(
    <Image 
        source={require("../assets/img/image4.jpg")} 
            style={{width:171, height:100}}
            borderRadius={20}
            width={171} 
            height={100}/>
    )};

interface NavigationTabProps{
    title:string;
    active?:boolean;
    image?:ReactNode;
    onPress:()=> void;  
}

export const CategoryCard:React.FC<NavigationTabProps> =({title, active=true, image, onPress})=>{
return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}> 
    <View style={tabStyle.container}>
        <View style={tabStyle.container}>  
            <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
        </View>
        <View >
            <CardImg/>
            {image}
        </View>
    </View>
    </TouchableOpacity>
    )
}

const tabStyle = StyleSheet.create({
    container: {
        flexDirection:"row",
        backgroundColor: "#2A2C36",
        alignItems:"center",
        borderRadius:8,
        marginVertical: 16,
        paddingHorizontal: 14,
    },
    text: {
        alignSelf: "center",
        fontSize: 9,
        lineHeight: 10,   
    },
    textActive: {
        color:"#abb4bd",
    },
    textInactive: {
        color:"#2A2C36",
    },
   
});
