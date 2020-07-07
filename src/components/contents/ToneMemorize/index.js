import React from 'react';
import { useStyles } from '../../Styles';
import Paper from "@material-ui/core/Paper";

export default function ToneMemorize() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} style={{textAlign:"center", display: "flex",
    justifyContent: "center",
    alignItems: "center",}}>
        <span style={{color:"#c2185b", fontSize:"2rem"}}>STILL IN DEVELOPMENT</span>
      </Paper>
    </div>     
    
  );
}