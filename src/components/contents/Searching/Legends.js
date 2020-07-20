import React from "react";
import { useStyles } from "../../Styles";

export default function Legends({ alg }) {
  const classes = useStyles();

  const legendSets = {
    linear: (
      <>
        <div className={classes.boxRest}></div> Rest
        <br />
        <div className={classes.boxChecking}></div> Checking
        <br />
        <div className={classes.boxWrong}></div> Wrong
        <br />
        <div className={classes.boxFound}></div> Found
      </>
    ),
    binary: (
      <>
        <div className={classes.boxSwap}></div> Partition
        <br />
        <div className={classes.boxChecking}></div> Middle
        <br />
        <div className={classes.boxFound}></div> Found
      </>
    ),
    jump: (
      <>
        <div className={classes.boxIdx}></div> Trail
        <br />
        <div className={classes.boxChecking}></div> Checking
        <br />
        <div className={classes.boxFound}></div> Found
      </>
    ),
  };
  return legendSets[alg];
}
