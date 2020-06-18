import React from "react";
import { useStyles } from "../../Styles";

export default function Legends({ alg }) {
  const classes = useStyles();
  if (alg === "bubbleOptimized") {
      alg = "bubble";
  }
  
  const legendSets = {
    selection: (
      <>
        <div className={classes.boxValue}></div> Unsort value
        <br />
        <div className={classes.boxIdx}></div> Current indexing
        <br />
        <div className={classes.boxMin}></div> Minimum value
        <br />
        <div className={classes.boxSwap}></div> Swap elements
        <br />
        <div className={classes.boxSorted}></div> Sorted elements
      </>
    ),
    bubble: (
        <>
          <div className={classes.boxValue}></div> Unsorted value
          <br />
          <div className={classes.boxIdx}></div> Current indexing
          <br />
          <div className={classes.boxSwap}></div> Swap elements
          <br />
          <div className={classes.boxSorted}></div> Sorted elements
        </>
      ),
    quick: (
        <>
          <div className={classes.boxValue}></div> Unsorted value
          <br />
          <div className={classes.boxIdx}></div> Current indexing
          <br />
          <div className={classes.boxSwap}></div> Swap elements
          <br />
          <div className={classes.boxSorted}></div> Sorted elements
          <br />
          <div className={classes.boxLeft}></div> Left of partition
          <br />
          <div className={classes.boxRight}></div> Right of partition
        </>
      ),
  };
  return legendSets[alg];
}
