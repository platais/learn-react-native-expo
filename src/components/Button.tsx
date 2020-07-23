import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

interface Props{
    title:string;
    onPress:()=> void;
}

export const Button:React.FC<Props> =({title, onPress})=>{
    return (
    <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
        </TouchableOpacity>
        );
};

const style = StyleSheet.create({
    container: {
   
      paddingVertical: 24,
      paddingHorizontal: 12,
      backgroundColor: 'palegreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: "#EF3651",

     }
})