import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = "13%";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  aboutMe: {
    background: "linear-gradient(to top, #c2185b, #1976d2, #fff, #fff)",
    backgroundSize: "250% 250%",
    animation: `$myabout 15s infinite`,
    color: "#1976d2",
    fontSize: "1rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    height: "calc(100vh - 64px)",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #c2185b 30%, #1976d2 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 10px",
  },
  appBarButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  button: {
    background: "linear-gradient(45deg, #00acc1 30%, #039be5 90%)",
    color: "white",
  },
  contact: {
    float: "right",
    flex: 1,
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
    background: "linear-gradient(to right, #fff 95%, #fce4ec 100%)",
    height: "100vh",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "12%",
    float: "left",
    display: "block",
  },
  content: {
    flexGrow: 1,
    height: "90vh",
  },
  imgStyle: {
    float: "right",
    boxShadow:
      "8px 4px 8px 5px rgba(0, 0, 0, 0.2), 10px 6px 20px 10px rgba(0, 0, 0, 0.19)",
  },
  paper: {
    flex: 1,
    float: "bottom",
    borderColor: "red",
    position: "relative",
    top: "1%",
    left: "1%",
    width: "98%",
    height: "97%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    borderRadius: 10,
    padding: "20px 50px",
  },
  pBorder: {
    float: "left",
    width: "75%",
    boxSizing: "border-box",
    borderStyle: "groove",
    borderColor: "#e3f2fd",
    borderRadius: 3,
    padding: "2px 2px",
  },
  pBorder2: {
    float: "left",
    width: "100%",
    boxSizing: "border-box",
    borderStyle: "dotted",
    borderColor: "#1976d2",
    borderRadius: 3,
    padding: "2px 2px",
  },
  selectedItem: {
    background: "linear-gradient(to right, #fff 95%, #c2185b 100%)",
    borderRadius: 5,
    boxShadow: "0 3px 5px 3px rgba(255, 105, 135, .3)",
  },
  sidebarItemText: {
    color: "#1976d2",
    fontSize: "0.9rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginLeft: "10px",
  },
  sidebarSubitemText: {
    color: "#c2185b",
    fontSize: "0.9rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    marginLeft: "20px",
  },
  visualizer: {
    padding: "10px 10px",
  },
  welcome: {
    background:
      "linear-gradient(-45deg, #e3f2fd, #fff, #c2185b, #1976d2, #fff, #e3f2fd)",
    backgroundSize: "400% 400%",
    fontSize: "2.8em",
    fontStyle: "oblique",
    // padding: "119.5px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 64px)",
    fontWeight: "bold",
    textAlign: "center",
    animation: `$mywelcome 10s infinite`,
    width: "100%",
  },
  welcomeList: {
    padding:"5% 0 0 0",
    listStyleType: "none",
    animation: `$changecolor 10s infinite`,
  },
  scroll: {
    padding:"20% 0 0 0",
    animation: `$fadein 5s, $changecolor2 10s infinite`,
  },
  "@keyframes mywelcome": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  "@keyframes changecolor": {
    "0%": {
      color: "#c2185b",
    },
    "50%": {
      color: "#1976d2",
    },
    "100%": {
      color: "#c2185b",
    },
  },
  "@keyframes changecolor2": {
    "0%": {
      color: "#1976d2",
    },
    "50%": {
      color: "#c2185b",
    },
    "100%": {
      color: "#1976d2",
    },
  },
  "@keyframes fadein": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "@keyframes myabout": {
    "0%": {
      backgroundPosition: "0% 0%",
    },
    "50%": {
      backgroundPosition: "100% 100%",
    },
    "100%": {
      backgroundPosition: "0% 0%",
    },
  },
}));
