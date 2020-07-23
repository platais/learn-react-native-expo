import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, StatusBar, StatusBarIOS } from 'react-native';
import storybook from './storybook';
//import {Button} from "./src/components/Button";

const IS_STORYBOOK = true;

const skills = [
  {
  title: "Java",
  logo: "😃" ,
  hours: 5
},
{
  title: "Js",
  logo: "😃" ,
  hours: 3
},
{
  title: "C",
  logo: "😃" ,
  hours: 1
},
{
  title: "Java",
  logo: "😃" ,
  hours: 5
},
{
  title: "Js",
  logo: "😃" ,
  hours: 3
},
{
  title: "C",
  logo: "😃" ,
  hours: 1
},
{
title: "Java",
logo: "😃" ,
hours: 5
},
{
title: "Js",
logo: "😃" ,
hours: 3
},
{
title: "C",
logo: "😃" ,
hours: 1
},
{
title: "Java",
logo: "😃" ,
hours: 5
},
{
title: "Js",
logo: "😃" ,
hours: 3
},
{
title: "C",
logo: "😃" ,
hours: 1
},
]
// const generateRandomSkills =(n: number):SkillProps[] => {
//   return new Array(n).map((it:number)=>({
    
//       title: "C" + i,
//       logo: "😃" ,
//       hours: 1,
    
//   }))

//};
interface SkillProps{
  title: string;
  logo: string;
  hours: number;
}
const Skill: React.FC<SkillProps> =({title, logo, hours})=>{
  const [totalHoursSpent, setTotalHoursSpent] = useState<number>(hours);
  return (
    <View>
      <Text>{title}</Text>
      <Text>{logo}</Text>
      <Text>{totalHoursSpent}</Text>
      <TouchableOpacity onPress={() => setTotalHoursSpent(totalHoursSpent+1)}>
        <Text>Add hour</Text>
        </TouchableOpacity>
    </View>
  )
}

function App() {
  //const skills = generateRandomSkills(100);
  // const[count, setCount] = useState<number>(0);
  // const onPress = ()=>{
  //   setCount(count+1);
  // };
  
  return (
    // <View style={styles.container}>
    
    // <StatusBarIOS backgroundColor="red">
     <ScrollView contentContainerStyle={styles.container}>
      {/* // <Text style={{fontSize:16}}>Hello world, counter is: {count}</Text>  */}
      
      {/* //data ={skills}
      //renderItem={({item}) => <Skill title={skill.title} logo={skill.logo} hours={skill.hours}/>}
      //> */}
      <Text style={[styles.title, styles.redBold]}>My skills</Text>
      {skills.map(skill =>(
         <Skill key={skill.title} title={skill.title} logo={skill.logo} hours={skill.hours} />
      ))}
     </ScrollView>
    ///* </StatusbarIOS> */
  
  );
}
const skillStyle = StyleSheet.create({
container:{
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
},
})

const styles = StyleSheet.create({
  container: {
 
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: 'palegreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:36
  },
  redBold:{
  color:"red",
  },
});

export default (IS_STORYBOOK ? storybook : App)