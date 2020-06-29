/*

*/

import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WatchListScreen from "../screens/WatchListScreen";
import IndiceScreen from "../screens/IndiceScreen";
import NewsScreen from "../screens/NewsScreen";
import MainNavigator from "./MainNavigator";
import Colors from "../theme/colors"


const Stack = createStackNavigator();

export default function ScreenStack() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="WatchListScreen" component={WatchListScreen} />
          <Stack.Screen name="IndiceScreen" component={IndiceScreen} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    );
}
