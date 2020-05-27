import React from "react";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import Containers from "./Containers";
import Contact from "./Contact";
import Welcome from "./contents/Welcome";
import AboutMe from "./contents/AboutMe";
import Sorting from "./contents/Sorting";
import Searching from "./contents/Searching";
import VirtualPiano from "./contents/VirtualPiano";
import { useStyles } from "./Styles";

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
  const [selectedContainer, setContainer] = React.useState(0);
  const handleSubItemClick = (event, id, name) => {
    setSelectedIndex(id);
    setContainer(getIndex[name]);
  };
  const getIndex = {
    "Welcome": 0,
    "AboutMe": 1,
    "Sorting": 2,
    "Searching": 3,
    "VirtualPiano": 4,
  };
  const idFunc = {
    0: {id: null, func: <Welcome/>},
    1: {id: "01", func: <AboutMe/>},
    2: {id: "11", func: <Sorting/>},
    3: {id: "12", func: <Searching/>},
    4: {id: "21", func: <VirtualPiano/>},
  };
  const handleScrollContainer = (event) => {
    if (event.deltaY > 0) {
      if(selectedContainer === Object.keys(idFunc).length - 1){
        setSelectedIndex(idFunc[0].id);
        setContainer(0);
      } else {
        setSelectedIndex(idFunc[selectedContainer+1].id);
        setContainer(selectedContainer+1);
      } 
    } else if (event.deltaY < 0) {
      if(selectedContainer === 0){
        setSelectedIndex(idFunc[Object.keys(idFunc).length - 1].id);
        setContainer(Object.keys(idFunc).length - 1);
      } else {
        setSelectedIndex(idFunc[selectedContainer-1].id);
        setContainer(selectedContainer-1);
      } 
    }
    
  };
  const dat = new Date().toDateString();
  console.log(selectedContainer);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Button
            className={classes.appBarButton}
            onClick={(event) => {
              handleSubItemClick(event, null, "Welcome");
            }}
          >
            {selectedContainer === 1 ? (
              <span>Welcome</span>
            ) : (
              <span>Nguyen Nhat Quang</span>
            )}
          </Button>
          <Contact />
          {dat}
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
                  <Divider style={{ margin: "7.5px 0" }} />
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
                      <sidebarItem.Icon style={{ fontSize: "0.85rem" }}/>
                      <ListItemText
                        classes={{ primary: classes.sidebarItemText }}
                        primary={sidebarItem.label}
                      />
                      {collapsed[sidebarItem.name] ? (
                        <ExpandLess
                          style={{ fontSize: "0.85rem" }}
                        />
                      ) : (
                        <ExpandMore
                          style={{ fontSize: "0.85rem" }}
                        />
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
      <main className={classes.content} onWheel={(event) => handleScrollContainer(event)}>
        <Toolbar />
        {/* <Containers selectedContainer={selectedContainer}/> */}
        {idFunc[selectedContainer] ? idFunc[selectedContainer].func : <div>Working in progress...</div>}
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
              classes={{ selected: style.selectedItem }}
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