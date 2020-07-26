import React,{ ReactNode } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { useCallback } from "@storybook/addons";
import HomeInactive from "../assets/icons/HomeInactive";
import CartActive from "../assets/icons/CartActive";
import BagInactive from "../assets/icons/BagInactive";
import HeartInactive from "../assets/icons/HeartInactive";
import ProfileInactive from "../assets/icons/ProfileInactive";

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
    icon?:ReactNode;
}

// interface Props{
//     title:string;
//     onPress:()=> void;
// }

const NavigationTab:React.FC<NavigationTabProps> =({title, active, icon})=>{
return (
    <View style={tabStyle.container} >
        {icon}
        <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
    </View>
    )
}
export const BottomNavBar:React.FC =()=> {
    //ar šo var salādēt visas vajadzīgās bildes tel atmina, samazinas gaidisanas laiku pie skatu ielades
    //useCallback(() =>{
    //   Image.prefetch("https://via.placeholder.com/120");
    //})
    return (
       
            <View style={style.container}>
                <NavigationTab title="Home" active={false} icon={<HomeInactive/>}/>
                <NavigationTab title="Shop" active={true} icon={<CartActive/>}/>
                <NavigationTab title="Bag" active={false} icon={<BagInactive/>}/>
                <NavigationTab title="Favourites" active={false} icon={<HeartInactive/>}/>
                <NavigationTab title="Profile" active={false} icon={<ProfileInactive/>}/>   
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
        color:"yellow",
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