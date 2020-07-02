/**
 * SearchStock.js -- search a typed stock symbol and display a chart
 *
 * HyunJae Pi
 * hyunpi@brandeis.edu
 *
 * last update: 7/1/2020
 */

import React, { Component, useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useAsyncStorage } from '@react-native-community/async-storage';

import Chart from "../charts/Chart";


export default function SearchStock() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("AAPL");
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${searchText}?timeseries=5&apikey=ccc99b9c4c2a7d7bce43741669bc3e5f`;

  const getData = async () => {
    const result = await fetch(url)
    const data = await result.json()
    setData(data)
  }

  const submit = async () => {
    getData();
    setSearchText("");
  };

  const clearData = async () => {
    setSearchText("");
    setData([]);
  };

  useEffect(() => {
    getData();
  })

  return (
    <View style={styles.container} >
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={(text) => {setSearchText(text);}}
          style={styles.textInput}
          onSubmitEditing={() => submit()}
          value={searchText}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button} onPress={() => submit()}  >
          <Text style = {styles.buttonText}> Search </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button} onPress={() => clearData()}  >
          <Text style = {styles.buttonText}> Clear </Text>
        </TouchableOpacity>
      </View>

{/* for debugging
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button} onPress={() => getData()}  >
          <Text style = {styles.buttonText}> Tests retrieve data </Text>
        </TouchableOpacity>
      </View>
*/}

      <View style={styles.chart}>
        <Text> {"\n\n"}</Text>
        <Chart data={data.historical} symbol ={data.symbol} />
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "white",

  },
  chart: {
    //justifyContent: "space-between",
    backgroundColor: "white",
    margin: 0,
  },
  textInput: {
    flex: 0.8,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

});


{/*
<Text> {"\n\n"} test {JSON.stringify(data.historical,null,2)} </Text>
<Text> {"\n\n"} {JSON.stringify(data,null,2)} </Text>
<Text> {"\n\n"} {JSON.stringify(data["Meta Data"],null,2)} </Text>
<View style={{ flex: 1 }}>
  <Chart data={data} />

  `https://eodhistoricaldata.com/api/eod/${searchText}.US?from=2017-01-05&to=2017-02-10&api_token=5efb2080854fa9.80707652&period=d&fmt=json`;
</View>
  */}
