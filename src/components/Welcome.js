import React from "react";
import { useStyles } from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <ul className={classes.welcomeList}>
        <li>W</li>
        <li>E</li>
        <li>L</li>
        <li>C</li>
        <li>O</li>
        <li>M</li>
        <li>E</li>
        <div className={classes.scroll}>
          <p style={{fontSize: "small"}}>scroll down to next section</p>
          <ExpandMoreIcon />
        </div>
      </ul>
    </div>
  );
}
