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
  sidebarSubitemText: {
    color: "#c2185b",
    fontSize: "0.95rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    marginLeft: "20px",
  },
}));

export default function Sidebar({ items }) {
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

  const handleSubItemClick = (event, id) => {
    setSelectedIndex(id);
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
                  <Divider style={{ margin: "6px 0" }} />
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
                      style={classes.sidebarSubitemText}
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
        <Typography paragraph>Alo alo.</Typography>
      </main>
    </div>
  );
}

function CollapseItem({ key, collapsed, items, style, click, select}) {
  return (
    <Collapse key={key} in={!collapsed} timeout="auto" unmountOnExit>
      <List disablePadding>
        {items.map((subItem) => {
          return (
            <ListItem
              button
              key={subItem.id}
              onClick={(event) => click(event, subItem.id)}
              selected={select === subItem.id}
            >
              <ListItemText
                classes={{ primary: style }}
                primary={subItem.label}
              />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
}
