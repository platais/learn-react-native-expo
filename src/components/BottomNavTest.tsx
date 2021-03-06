import React,{ ReactNode } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { useCallback } from "@storybook/addons";
import HomeInactive from "../assets/icons/HomeInactive.svg";
import HomeActive from "../assets/icons/HomeActive.svg";
import CartInactive from "../assets/icons/CartInactive.svg";
import CartActive from "../assets/icons/CartActive.svg";
import BagInactive from "../assets/icons/BagInactive.svg";
import BagActive from "../assets/icons/BagActive.svg";
import HeartInactive from "../assets/icons/HeartInactive.svg";
import HeartActive from "../assets/icons/HeartActive.svg";
import ProfileInactive from "../assets/icons/ProfileInactive.svg";
import ProfileActive from "../assets/icons/ProfileActive.svg";

// const Home =()=> <Image source={require("..assets/icons/home.png")}>
// const Home =()=> {
// <Image 
//     style={{width:40, height:40}}
//     width={40} 
//     height={40}
//     source={{uri: "https://via.placeholder.com/120"}}
//     />
// };

interface NavigationTabProps{
    title:string;
    active:boolean;
    iconActive?:ReactNode;
    iconInactive?:ReactNode;
    
}

const NavigationTab:React.FC<NavigationTabProps> =({title, active, iconInactive, iconActive})=>{
return (
    
    <View style={tabStyle.container}>
        {active? iconActive:iconInactive}
        <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
    </View>
    )
}
export const BottomNavBarTest:React.FC =()=> {
    //ar šo var salādēt visas vajadzīgās bildes tel atmina, samazinas gaidisanas laiku pie skatu ielades
    //useCallback(() =>{
    //   Image.prefetch("https://via.placeholder.com/120");
    //})
    return (       

            <View style={style.container}>
                <NavigationTab title="Home" active={false} iconActive={<HomeActive/>} iconInactive={<HomeInactive/>}/>
                <NavigationTab title="Shop" active={true} iconActive={<CartActive/>} iconInactive={<CartInactive/>}/>
                <NavigationTab title="Bag" active={false} iconActive={<BagActive/>} iconInactive={<BagInactive/>}/>
                <NavigationTab title="Favourites" active={false} iconActive={<HeartActive/>} iconInactive={<HeartInactive/>}/>
                <NavigationTab title="Profile" active={false} iconActive={<ProfileActive/>} iconInactive={<ProfileInactive/>}/>   
            </View>
    )
};

const tabStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1e1f28",
        height:48,
        alignItems:"center",
    },
    text: {

        alignSelf: "center",
        fontSize: 9,
        lineHeight: 10,
        
    },
    textActive: {
        color:"yellow",
    },
    textInactive: {
        color:"#abb4bd",
    },
   
});
const style = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-around",
    },
});