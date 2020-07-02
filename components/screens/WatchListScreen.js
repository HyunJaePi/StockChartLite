/**
 * WatchListScreen.js -- a kind of home screen right now
 *
 * HyunJae Pi
 * hyunpi@brandeis.edu
 *
 * last update: 7/1/2020
 */

import React from "react";
import { View, Text, StyleSheet, } from "react-native";

import SearchStock from "../search/SearchStock";


export default function WatchListScreen() {

  return (
    <View style={styles.container}>
      <SearchStock />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
