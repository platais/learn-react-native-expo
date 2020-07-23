import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

interface Props{
    title:string;
    onPress:()=> void;
}

export const Button:React.FC<Props> =({title, onPress})=>{
    return (
    <TouchableOpacity style={style.container} onPress={onPress}>
        <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
        );
};

const style = StyleSheet.create({
    container: {
   
      paddingVertical: 12,
      paddingHorizontal: 12,
      marginTop:24,
      backgroundColor: '#EF3651',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    },
    text: {
        color: "#F5F5F5",
        fontSize: 14,
        lineHeight: 20,
     }
})