import React,{ReactNode} from "react";
import {TouchableOpacity, Text, View, StyleSheet} from "react-native";
import  {LinearGradient} from "expo-linear-gradient";

interface Props{
    title?:string;
    onPress:()=> void;
    outlined?:boolean;
    size?:"sm" | "md";
    icon?:ReactNode | false;
}

export const Button:React.FC<Props> =({title, onPress, outlined = false, size="md", icon})=>{
    //atgriežam komponenti vai wrapojam iekšā
     const wrapWithGradient = (node:ReactNode): ReactNode => {
         if(outlined){
             return (
             <View style={style.outlined}>
                 {node}
            </View>
            );
         }
        return (
            <LinearGradient
                colors={["#EF3651", "#EF8641"]}
                start={{x:0, y: 0}}
                end={{x:2, y: 2}}
                style={[style.container, outlined ? style.outlined : style.filled]}
            >
                {node}
            </LinearGradient>
        );
    };

     if(icon){
         return(
         <TouchableOpacity onPress={onPress} activeOpacity={0.85}>          
            
            <View style={style.iconContainer}>{icon}</View>
       
         </TouchableOpacity>
         )
     }else{
    
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
            
             {wrapWithGradient(
                <Text style={[style.text, size === "sm" ? style.textSmall : style.textMedium]}>{title}</Text>
            )}
            
        </TouchableOpacity>
    )
    };
};

const style = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      paddingHorizontal: 28
    },
    iconContainer:{
      backgroundColor: '#EF3651',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      paddingVertical: 14,
      paddingHorizontal: 28,
    },
    filled:{
      backgroundColor: '#EF3651',
    },
    outlined:{
        borderColor: "#EF3651",
        borderWidth: 1.5,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        
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