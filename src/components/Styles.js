import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = "13%";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  boxValue: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#9e9e9e",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxIdx: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#5d4037",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxMin: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#7b1fa2",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxLeft: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#f57c00",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxRight: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#0097a7",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxSwap: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#c2185b",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxSorted: {
    margin: "5px",
    float: "left", 
    width: "15px",
    height: "15px",
    background: "#afb42b",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  button: {
    background: "#fff",
    color: "#039be5",
    fontWeight: "700",
    position:"relative",
  },
  buttonStart: {
    background: "#fff ",
    color: "#c2185b",
    fontWeight: "700",
    position:"relative",
  },
  contact: {
    float: "right",
    flex: 1,
  },
  container: {
    background: "linear-gradient(to top, #c2185b, #1976d2, #fff, #fff)",
    backgroundSize: "250% 250%",
    animation: `$myabout 15s infinite`,
    fontSize: "1rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    height: "calc(100vh - 64px)",
  },
  content: {
    flexGrow: 1,
    height: "90vh",
  },
  chart: {
    background: "linear-gradient(to top, #f5f5f5, #fff, #fff)",
    borderRadius: 10,
    position: "relative",
    top: "11%",
  },
  tooltipWidth: {
    maxWidth: 500,
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
    width: "12%",
    height: "10%",
    position:"relative",
  },
  info: {
    fontSize: "medium",
    color: "#388e3c",
  },
  imgStyle: {
    float: "right",
    boxShadow:
      "8px 4px 8px 5px rgba(0, 0, 0, 0.2), 10px 6px 20px 10px rgba(0, 0, 0, 0.19)",
    borderRadius: 5,
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
    borderRadius: 5,
    padding: "2px 2px",
  },
  pBorder2: {
    float: "left",
    width: "100%",
    boxSizing: "border-box",
    borderStyle: "dotted",
    borderColor: "#1976d2",
    borderRadius: 5,
    padding: "2px 2px",
  },
  paperCount: {
    position: "relative",
    float: "right",
    fontSize: "0.8rem",
    color: "#388e3c",
    borderStyle: "double",
    borderRadius: 3,
    borderColor: "#388e3c",
  },
  paperLegends: {
    display: "inline-flex",
    borderStyle: "solid",
    borderRadius: 3,
    borderColor: "#9e9e9e",
    fontSize: "0.7rem",
    boxShadow: "0 0 0 0 ",
    alignItems: "center",
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
    padding: "5% 0 0 0",
    listStyleType: "none",
    animation: `$changecolor 10s infinite`,
  },
  scroll: {
    padding: "20% 0 0 0",
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
