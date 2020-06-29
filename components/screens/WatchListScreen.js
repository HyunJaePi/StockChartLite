import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, } from "react-native";

import SearchStock from "../search/SearchStock";
import Chart from "../stock/Chart";

export default function WatchListScreen() {
  const [selectedStock, setSelectedStock] = useState([]);

  return (
    <View style={styles.container}>
      <SearchStock setSelectedStock={setSelectedStock} selectedStock={selectedStock} />
      {/* <Chart selectedStock={selectedStock} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    //justifyContent: "space-between",
    backgroundColor: "white",
  },
});
