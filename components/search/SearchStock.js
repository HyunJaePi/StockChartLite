import React, { Component, useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
//import axios from "axios";
import FetchData from "./FetchData"



export default function SearchStock() {
  const [searchText, setSearchText] = useState("AAPL");
  const [displayText, setDisplayText] = useState("");
  const [stockData,setStockData] = useState([]);

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchText}&apikey=2DMYNF09LS0LCIKD`;

  const getData = async () => {
    const result = await fetch(url);
    console.log(result);
    const data = await result.json();
    console.log(data);
    setStockData(data);
  }


  const submit = async () => {
    searchText && getData();
    setSearchText("");
  };

  return (
    <View>
      <View style={{ flex: 2 }}>
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

      <Text> {"\n\n\n\n"} {JSON.stringify(stockData,null,2)} </Text>

    </View>
  );

}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
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
    margin: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
