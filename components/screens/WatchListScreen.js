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
    backgroundColor: "black",
  },
});
