import React,{ ReactNode } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { useCallback } from "@storybook/addons";
// import HomeActive from "../../svg/HomeActive";

// const Home =()=> <Image source={require("..assets/icons/home.png")}>
const Home =()=> {
<Image 
    style={{width:40, height:40}}
    width={40} 
    height={40}
    source={{uri: "https://via.placeholder.com/120"}}
    />
};

interface NavigationTabProps{
    title:string;
    active:boolean;
    icon?:ReactNode;
}

interface Props{
    title:string;
    onPress:()=> void;
}

const NavigationTab:React.FC<NavigationTabProps> =({title, active})=>{
return (
    <View style={tabStyle.container} >
        <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
    </View>
    )
}
export const BottomNavBar:React.FC =()=> {
    return (
       
            <View style={style.container}>
                {/* <NavigationTab title="Home" active={false} icon={}/> */}
                <NavigationTab title="Shop" active={true}/>
                <NavigationTab title="Bag" active={false}/>
                <NavigationTab title="Favourites" active={false}/>
                <NavigationTab title="Profile" active={false}/>   
            </View>
    )
};

const tabStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1e1f28",
        height:48,
        alignItems: "center",
        justifyContent:"center",
    },
    text: {
        alignSelf: "center",
        fontSize: 10,
        lineHeight: 10,
    },
    textActive: {
        color:"#abb4bd",
    },
    textInactive: {
        color:"#abb4bd",
    },
   
});
const style = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
    },

});