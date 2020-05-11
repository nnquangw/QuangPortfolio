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

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
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
}));

export default function Sidebar({ items }) {
  const classes = useStyles();

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
          <List disablePadding dense>
            {items.map((sidebarItem, index) => {
              return (
                <React.Fragment key={`${sidebarItem.name}${index}`}>
                  {sidebarItem === "divider" ? (
                    <Divider style={{ margin: "6px 0" }} />
                  ) : (
                    <MakeSidebarItem item={sidebarItem} index={index} />
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>Alo alo.</Typography>
      </main>
    </div>
  );
}

function MakeSidebarItem({
  depthStep = 15,
  depth = 0,
  expanded,
  item,
  index,
  ...rest
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { label, items, Icon } = item;

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    if (Array.isArray(items)) {
      toggleCollapse();
    } else {
      if (selectedIndex === null) {
        setSelectedIndex(index);
      } else {
        setSelectedIndex(null);
      }
    }
  };

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
  }

  let txtStyle;

  if (depth > 0) {
    txtStyle = "sidebar-subitem-text";
  } else {
    txtStyle = "sidebar-item-text";
  }

  return (
    <>
      <ListItem
        component="div"
        className="sidebar-item"
        onClick={(event) => handleListItemClick(event, index)}
        selected={selectedIndex === index}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className={txtStyle}>{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      {Array.isArray(items) ? (
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {items.map((subItem, subIndex) => (
            <React.Fragment key={`${subItem.name}${index}`}>
              {subItem === "divider" ? (
                <Divider style={{ margin: "6px 0" }} />
              ) : (
                <MakeSidebarItem
                  depthStep={depthStep}
                  depth={depth + 1}
                  item={subItem}
                  index={subIndex}
                />
              )}
            </React.Fragment>
          ))}
        </Collapse>
      ) : null}
    </>
  );
}
