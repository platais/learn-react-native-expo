import React from 'react';
import {name as appName} from "./app.json";
import storybook from './storybook';
import { AppRegistry } from 'react-native';

const IS_STORYBOOK = false;

AppRegistry.registerComponent(appName, () => (IS_STORYBOOK ? storybook : App));