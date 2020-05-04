import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #c2185b 30%, #1976d2 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <h1 className={classes.root}>Nguyen Nhat Quang</h1>;
}