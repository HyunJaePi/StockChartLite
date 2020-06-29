/*

*/

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import WatchListScreen from "../screens/WatchListScreen";
import IndiceScreen from "../screens/IndiceScreen";
import NewsScreen from "../screens/NewsScreen";


const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName="WatchListScreen">
      <Tab.Screen
        name="IndiceScreen"
        component={IndiceScreen}
        options={{
          title: "Indice",
          tabBarIcon:({tintColor})=>(
            <MaterialCommunityIcons name="home-outline" size={24} color="black" />
           )
        }}
      />
      <Tab.Screen
        name="WatchListScreen"
        component={WatchListScreen}
        options={{
          title: "Watch List",
          tabBarIcon:({tintColor})=>(
            <MaterialCommunityIcons name="finance" size={24} color="black" />
           )
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          title: "News",
          tabBarIcon:({tintColor})=>(
            <FontAwesome name="newspaper-o" size={24} color="black" />
           )
        }}
      />
    </Tab.Navigator>
  );
}
