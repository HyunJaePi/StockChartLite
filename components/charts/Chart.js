/**
 * Chart.js -- display a candlestick chart
 *
 * HyunJae Pi
 * hyunpi@brandeis.edu
 *
 * last update: 7/1/2020
 */

import Echarts from "echarts-for-react"
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAsyncStorage } from '@react-native-community/async-storage';


export default function Chart ({data, symbol}) {
  let dates = [];
  let values = [];

  if (data) {
    data.map((stockData) => dates.push(stockData["date"]));
    data.map((item) =>
      values.push([item["open"], item["close"], item["low"], item["high"]])
    );
  }
  let stockName = JSON.stringify(symbol);

  const chartOption = {
    title: {
      display: true,
      text: JSON.stringify(symbol),
      align: "bottom",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [name],
      textStyle: {
        color: "black",
      },
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: dates,
        axisLine: { lineStyle: { color: "black" } },
      },
    ],
    yAxis: [
      {
        scale: true,
        axisLine: {
          lineStyle: { color: "black" },
        },
        splitLine: { show: false },
      },
    ],
    color: ["rgb(249,159,94)", "rgb(67,205,126)"],
    animation: true,
    series: [
      {
        type: "candlestick",
        name: "Daily",
        data: values,
        itemStyle: {
          normal: {
            color: "#FD1050",
            color0: "#0CF49B",
            borderColor: "#FD1050",
            borderColor0: "#0CF49B",
          },
        },
      },
    ],
  };

  return (
    <View>


      <Echarts option={chartOption} />
    </View>

  );
}




{/*
<Text> {"\n\n"} {JSON.stringify(data,null,2)} </Text>
  */}
