/**
 * StockChartLite -- display different charts of a given stock symbol
 *
 * HyunJae Pi
 * hyunpi@brandeis.edu
 *
 * last update: 7/1/2020
 */


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WatchListScreen from "./components/screens/WatchListScreen";
import IndiceScreen from "./components/screens/IndiceScreen";
import NewsScreen from "./components/screens/NewsScreen";
import MainNavigator from "./components/navigation/MainNavigator";

import Colors from "./components/theme/colors"

const Stack = createStackNavigator();
const today = new Date().getDay();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Stock Chart Lite" component={MainNavigator} />
          <Stack.Screen name="WatchListScreen" component={WatchListScreen} />
          <Stack.Screen name="IndiceScreen" component={IndiceScreen} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
