import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Collapse from "@material-ui/core/Collapse";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <List disablePadding dense>
          {this.props.items.map((sidebarItem, index) => (
            <React.Fragment key={`${sidebarItem.name}${index}`}>
              {sidebarItem === "divider" ? (
                <Divider style={{ margin: "6px 0" }} />
              ) : (
                <MakeSidebarItem item={sidebarItem} />
              )}
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }
}

function MakeSidebarItem({
  depthStep = 10,
  depth = 0,
  txtStyle = "sidebar-item-text",
  expanded,
  item,
  ...rest
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { label, items, Icon } = item;

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }
  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
  }
  return (
    <>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
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
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <MakeSidebarItem
                    depthStep={depthStep}
                    depth={depth + 1}
                    txtStyle={"sidebar-subitem-text"}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

export default Sidebar;
