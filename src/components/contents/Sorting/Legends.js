import React from "react";
import { useStyles } from "../../Styles";

export default function Legends({ alg }) {
  const classes = useStyles();

  const legendSets = {
    selection: (
      <>
        <div className={classes.boxValue}></div> Unsorted value
        <br />
        <div className={classes.boxIdx}></div> Current indexing
        <br />
        <div className={classes.boxMin}></div> Minimum value
        <br />
        <div className={classes.boxSwap}></div> Swap elements
        <br />
        <div className={classes.boxSorted}></div> Sorted elements &nbsp;
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
        <div className={classes.boxSorted}></div> Sorted elements &nbsp;
      </>
    ),
    quick: (
      <>
        <div className={classes.boxValue}></div> Element's Value
        <br />
        <div className={classes.boxIdx}></div> Current indexing
        <br />
        <div className={classes.boxSwap}></div> Swap elements
        <br />
        <div className={classes.boxMin}></div> Smaller than Pivot
        <br />
        <div className={classes.boxLeft}></div> Left of partition
        <br />
        <div className={classes.boxRight}></div> Right of partition (Pivot)
        &nbsp;
      </>
    ),
    merge: (
      <>
        <div className={classes.boxValue}></div> Element's Value
        <br />
        <div className={classes.boxSwap}></div> Allocated Value
        <br />
        <div className={classes.boxLeft}></div> Left of subarray
        <br />
        <div className={classes.boxMin}></div> Middle of subarray
        <br />
        <div className={classes.boxRight}></div> Right of subarray
        &nbsp;
      </>
    ),
  };
  return legendSets[alg];
}
