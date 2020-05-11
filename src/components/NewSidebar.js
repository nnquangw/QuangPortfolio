import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const drawerWidth = "23%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #c2185b 30%, #1976d2 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarItemText: {
    color: "#1976d2",
    fontSize: "1rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginLeft: "10px",
  },
}));

export default function Sidebar({ items }) {
  const classes = useStyles();
  let initArray = [];

  function setAll(a, v, length) {
    var i,
      n = length;
    for (i = 0; i < n; ++i) {
      a.push(v);
    }
  }
  setAll(initArray, <ExpandMore/>, items.length);
  const [collapsed0, setCollapsed0] = React.useState(false);
  const [collapsed1, setCollapsed1] = React.useState(false);
  const [collapsed2, setCollapsed2] = React.useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  function toggleCollapse(index) {
    if (index === 0) {
      setCollapsed0((collapsed) => !collapsed);
    } else {
      if (index === 1) {
        setCollapsed1((collapsed) => !collapsed);
      } else {
        setCollapsed2((collapsed) => !collapsed);
      }
    }   
  }

  const handleListItemClick = (event, index) => {
    if (Array.isArray(items)) {
      toggleCollapse(index);
    } else {
      if (selectedIndex === null) {
        setSelectedIndex(index);
      } else {
        setSelectedIndex(null);
      }
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Nguyen Nhat Quang
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {items.map((sidebarItem, index) => {
            return (
              <List key={`${sidebarItem.name}${index}`}>
                {sidebarItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : sidebarItem.items != null ? (
                  <div key={`${sidebarItem.name}${index}`}>
                    <ListItem
                      button
                      key={`${sidebarItem.name}${index}`}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemText
                        classes={{ primary: classes.sidebarItemText }}
                        primary={sidebarItem.label}
                      />

                      {(collapsed0 && (index === 0)) ? <ExpandLess /> : (
                        (collapsed1 && (index === 1)) ? <ExpandLess /> : (
                          (collapsed2 && (index === 2)) ? <ExpandLess /> : <ExpandMore />
                        )
                      )}

                    </ListItem>
                  </div>
                ) : null}
              </List>
            );
          })}
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>Alo alo.</Typography>
      </main>
    </div>
  );
}
