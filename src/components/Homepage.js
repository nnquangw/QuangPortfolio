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
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import Containers from "./Containers";


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
    background: "linear-gradient(to right, #e3f2fd 50%, #fce4ec 100%)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  selectedItem: {
    background: "linear-gradient(to right, #e3f2fd 50%, #c2185b 100%)",
  },
  sidebarItemText: {
    color: "#1976d2",
    fontSize: "1rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginLeft: "10px",
  },
  sidebarSubitemText: {
    color: "#c2185b",
    fontSize: "0.95rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    marginLeft: "20px",
  },
}));

export default function Homepage({ items }) {
  const classes = useStyles();

  const [collapsed, setCollapsed] = React.useState({});

  function toggleCollapse(name) {
    setCollapsed({ ...collapsed, [name]: !collapsed[name] });
  }
  const handleListItemClick = (event, item, name) => {
    if (Array.isArray(item)) {
      toggleCollapse(name);
    }
  };

  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [selectedContainer, setContainer] = React.useState("Welcome");
  const handleSubItemClick = (event, id, name) => {
    setSelectedIndex(id);
    setContainer(name);
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
          {items.map((sidebarItem) => {
            return (
              <List key={sidebarItem.id}>
                {sidebarItem === "divider" ? (
                  <Divider style={{ margin: "2px 0" }} />
                ) : sidebarItem.items != null ? (
                  <div key={sidebarItem.id}>
                    <ListItem
                      button
                      key={sidebarItem.id}
                      onClick={(event) =>
                        handleListItemClick(
                          event,
                          sidebarItem.items,
                          sidebarItem.name
                        )
                      }
                    >
                      <sidebarItem.Icon />
                      <ListItemText
                        classes={{ primary: classes.sidebarItemText }}
                        primary={sidebarItem.label}
                      />
                      {collapsed[sidebarItem.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItem>
                    <CollapseItem
                      key={sidebarItem.id}
                      collapsed={collapsed[sidebarItem.name]}
                      items={sidebarItem.items}
                      style={classes}
                      click={handleSubItemClick}
                      select={selectedIndex}
                    />
                  </div>
                ) : null}
              </List>
            );
          })}
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Containers selectedContainer={selectedContainer}/>
      </main>
    </div>
  );
}

function CollapseItem({ key, collapsed, items, style, click, select }) {
  return (
    <Collapse key={key} in={!collapsed} timeout="auto" unmountOnExit>
      <List disablePadding>
        {items.map((subItem) => {
          return (
            <ListItem
              button
              key={subItem.id}
              onClick={(event) => click(event, subItem.id, subItem.name)}
              selected={select === subItem.id}
              classes={{selected: style.selectedItem}}
            >
              <ListItemText
                classes={{ primary: style.sidebarSubitemText }}
                primary={subItem.label}
              />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
}
