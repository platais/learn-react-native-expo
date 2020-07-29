import React from "react";
import {Alert} from "react-native";
import {storiesOf} from "@storybook/react-native";
import {CategoryCard} from "../../../src/components";

const onPressed = () => Alert.alert("Pressed");

storiesOf("CategoryCard", module)
    .add("default", ()=> <CategoryCard title={"CategoryCard"} onPress={onPressed} />)

   