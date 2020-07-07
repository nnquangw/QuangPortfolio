import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

import Contact from "./Contact";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Sorting from "./contents/Sorting";
import Searching from "./contents/Searching";
import VirtualPiano from "./contents/VirtualPiano";
import ToneMemorize from "./contents/ToneMemorize";
import { useStyles } from "./Styles";

// const height = window.innerHeight;
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 500,
    opacity: 0.9,
  },
}))(Tooltip);

export default function Homepage({ props, items }) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [collapsed, setCollapsed] = React.useState({});

  function toggleCollapse(name) {
    setCollapsed({ ...collapsed, [name]: !collapsed[name] });
  }
  const handleListItemClick = (event, item, name) => {
    if (Array.isArray(item)) {
      toggleCollapse(name);
    }
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleSubItemClick = (event, name) => {
    setSelectedIndex(getIndex[name]);
    // document.documentElement.scrollTop = getIndex[name] * (height - 64);
  };
  const getIndex = {
    Welcome: 0,
    AboutMe: 1,
    Sorting: 2,
    Searching: 3,
    VirtualPiano: 4,
    ToneMemorize: 5,
  };
  const itemFunc = {
    0: { id: null, label: "Nguyen Nhat Quang", func: <Welcome /> },
    1: { id: "01", label: "About Me", func: <AboutMe /> },
    2: { id: "11", label: "Visualizer: Sorting", func: <Sorting /> },
    3: { id: "12", label: "Visualizer: Searching", func: <Searching /> },
    4: { id: "21", label: "Virtual Piano", func: <VirtualPiano /> },
    5: { id: "22", label: "Tone Memorize", func: <ToneMemorize /> },
  };
  const handleReturnTop = () => {
    // scrollToTop();
    setSelectedIndex(0);
  };
  const date = new Date().toDateString();
  const randomKey1 = Math.random().toString().substr(2, 3);
  const randomKey2 = Math.random().toString().substr(2, 4);
  const randomKey3 = Math.random().toString().substr(2, 5);

  const drawer = (
    <div className={classes.drawerContainer}>
      {items.map((sidebarItem) => {
        return (
          <List key={sidebarItem.id + randomKey1}>
            {sidebarItem.name === "divider" ? (
              <Divider style={{ margin: "7.5px 0" }} />
            ) : sidebarItem.items != null ? (
              <div>
                <ListItem
                  button
                  key={sidebarItem.id + randomKey2}
                  onClick={(event) =>
                    handleListItemClick(
                      event,
                      sidebarItem.items,
                      sidebarItem.name
                    )
                  }
                >
                  <sidebarItem.Icon style={{ fontSize: "0.85rem" }} />
                  <ListItemText
                    classes={{ primary: classes.sidebarItemText }}
                    primary={sidebarItem.label}
                  />
                  {collapsed[sidebarItem.name] ? (
                    <ExpandLess style={{ fontSize: "0.85rem" }} />
                  ) : (
                    <ExpandMore style={{ fontSize: "0.85rem" }} />
                  )}
                </ListItem>
                <CollapseItem
                  subKey={randomKey3}
                  collapsed={collapsed[sidebarItem.name]}
                  items={sidebarItem.items}
                  style={classes}
                  click={handleSubItemClick}
                  select={itemFunc[selectedIndex].id}
                />
              </div>
            ) : null}
          </List>
        );
      })}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleMouseWheel = (event) => {
    let newIndex = selectedIndex;
    if (event.deltaY > 0 && newIndex < Object.keys(itemFunc).length - 1) {
      newIndex = newIndex + 1;
    } else if (event.deltaY < 0 && newIndex > 0) {
      newIndex = newIndex - 1;
    }

    setSelectedIndex(newIndex);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <LightTooltip title="Menu" arrow>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </LightTooltip>
          <LightTooltip title="Return to Welcome page" arrow>
            <Button
              className={classes.appBarButton}
              onClick={(event) => handleReturnTop(event)}
              style={{ label: "to top" }}
            >
              {itemFunc[selectedIndex].label}
            </Button>
          </LightTooltip>

          <Contact />
          {date}
        </Toolbar>
      </AppBar>
      {/* <nav className={classes.drawer} aria-label="open menu"> */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden lgDown implementation="css">
        <Drawer
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <div>
            <Toolbar />
            {drawer}
          </div>
        </Drawer>
      </Hidden>
      {/* </nav> */}
      {/* <Drawer
        className={classes.drawer}
        anchor="left"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      ></Drawer> */}
      <main
        className={classes.content}
        onWheel={(event) => handleMouseWheel(event)}
      >
        <Toolbar />
        {itemFunc[selectedIndex].func}
      </main>
    </div>
  );
}

function CollapseItem({ subKey, collapsed, items, style, click, select }) {
  return (
    <Collapse in={!collapsed} timeout="auto" unmountOnExit>
      <List disablePadding>
        {items.map((subItem) => {
          return (
            <ListItem
              button
              key={subItem.id + subKey}
              onClick={(event) => click(event, subItem.name)}
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

// function scrollToTop() {
//   if (
//     document.body.scrollTop !== 0 ||
//     document.documentElement.scrollTop !== 0
//   ) {
//     window.scrollBy(0, -50);
//     requestAnimationFrame(scrollToTop);
//   }
// }
// function scrollDown() {
//   window.scrollBy(0, +10);
// }
// function scrollUp() {
//   window.scrollBy(0, -10);
// }

Homepage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };
// document.querySelector("html").style.scrollBehavior = "";
