import React, { Component, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
//import { Button, Input } from "react-native-elements";
import axios from "axios";

export default function SearchStock({ setSelectedStock, selectedStock }) {
  const [searchText, setSearchText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const fetchStock = async () => {
    try {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchText}&apikey=demo`
      );
      setSelectedStock({ data: res.data, });
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async () => {
    searchText && (await fetchStock(searchText));
    setDisplayText(searchText);
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

      <Text> {"\n\n\n\n"} {displayText} </Text>
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
