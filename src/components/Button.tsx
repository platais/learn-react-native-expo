import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import  {LinearGradient} from "expo-linear-gradient";

interface Props{
    title:string;
    onPress:()=> void;
    outlined?:boolean;
    size?:"sm" | "md";
}

export const Button:React.FC<Props> =({title, onPress, outlined = false, size="md"})=>{
     const wrapWithGradient = (node) => {
         if(outlined){
             return node;
         }
        return (
            <LinearGradient
                colors={["#EF3651", "#EF3651"]}
                start={{x:0, y: 0}}
                end={{x:1, y: 1}}
                style={[style.container, outlined ? style.outlined : style.filled]}
            >
                {node}
            </LinearGradient>
        );
    };
    return(    
        <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
            {wrapWithGradient(
                <Text style={[style.text, size === "sm" ? style.textSmall : style.textMedium]}>{title}</Text>,
            )}    
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    },
    filled:{
      backgroundColor: '#EF3651',
    },
    outlined:{
        borderColor: "red",
        borderWidth: 1.5,
    },
    text: {
        color: "#F5F5F5",
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 14,    
     },
     textSmall:{
        paddingVertical: 8,
     },
     textMedium:{
        paddingVertical: 14,
        textTransform: "uppercase",
     },
});