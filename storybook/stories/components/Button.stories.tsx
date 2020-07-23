import React from "react";
import {Alert} from "react-native";
import{storiesOf} from "@storybook/react-native";
import {Button} from "../../../src/components";

storiesOf("Button", module).add("default", ()=> <Button title={"Press Me"} onPress={()=>Alert.alert("Pressed")} />);