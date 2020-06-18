import React from "react";
import { BarSeries } from "@devexpress/dx-react-chart";

export default function Bars(alg, length) {
  if (alg === "bubbleOptimized") {
    alg = "bubble";
  }
  const barTypes = {
    unSort: (
      <BarSeries
        valueField="value"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#9e9e9e"
      />
    ),
    idx: (
      <BarSeries
        valueField="idx"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#5d4037"
      />
    ),
    min: (
      <BarSeries
        valueField="min"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#7b1fa2"
      />
    ),
    left: (
      <BarSeries
        valueField="left"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#f57c00"
      />
    ),
    right: (
      <BarSeries
        valueField="right"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#0097a7"
      />
    ),
    swap: (
      <BarSeries
        valueField="swap"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#c2185b"
      />
    ),
    sorted: (
      <BarSeries
        valueField="sorted"
        argumentField="index"
        barWidth={1 - 0.001 * length}
        color="#afb42b"
      />
    ),
  };

  const barSets = {
    selection: [barTypes.unSort, barTypes.idx, barTypes.min, barTypes.swap, barTypes.sorted],
    bubble: [barTypes.unSort, barTypes.idx, barTypes.swap, barTypes.sorted],
    quick: [barTypes.unSort, barTypes.idx, barTypes.left, barTypes.right, barTypes.swap, barTypes.sorted],
  };

  return barSets[alg];
}
