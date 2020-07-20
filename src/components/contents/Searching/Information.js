import React from "react";
import { useStyles } from "./../../Styles";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import InfoIcon from "@material-ui/icons/Info";
import { Slide, Zoom } from "@material-ui/core";

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

export default function Information({ alg }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false); // open tooltip

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const description = {
    linear: (
      <div style={{ fontSize: "0.8rem" , textAlign:"justify"}}>
        A simple approach is to do linear search, i.e
        <li>
          Start from the leftmost element of arr[] and one by one compare x with
          each element of arr[]
        </li>
        <li>If x matches with an element, return the index.</li>
        <li>If x doesn’t match with any of elements, return -1.</li>
        <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n) <br />
        <span>
          Linear search is rarely used practically because other search
          algorithms such as the binary search algorithm and hash tables allow
          significantly faster searching comparison to Linear search.
        </span>
      </div>
    ),
    binary: (
      <div style={{ fontSize: "0.8rem", textAlign:"justify"}}>
        <span style={{ fontWeight: "bold" }}>Binary Search:</span> Search a
        sorted array by repeatedly dividing the search interval in half. Begin
        with an interval covering the whole array. If the value of the search
        key is less than the item in the middle of the interval, narrow the
        interval to the lower half. Otherwise narrow it to the upper half.
        Repeatedly check until the value is found or the interval is empty.{" "}
        <br />
        We basically ignore half of the elements just after one comparison.{" "}
        <br />
        <li>Compare x with the middle element.</li>
        <li>If x matches with middle element, we return the mid index.</li>
        <li>
          Else If x is greater than the mid element, then x can only lie in
          right half subarray after the mid element. So we recur for right half.
        </li>
        <li>Else (x is smaller) recur for the left half.</li>
        <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(log n),
        because the array is sorted.
        <br />
        <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1) in
        case of iterative implementation. In case of recursive implementation,
        O(log n) recursion call stack space.
        <br />
        <span style={{ fontWeight: "bold" }}>
          My implement below is iterative version for a clearly visualization
        </span>
      </div>
    ),
    jump: (
      <div style={{ fontSize: "0.8rem", textAlign:"justify"}}>
        <span style={{ fontWeight: "bold" }}>Jump Search:</span>
        is a searching algorithm for sorted arrays. The basic idea is to check
        fewer elements (than linear search) by jumping ahead by fixed steps or
        skipping some elements in place of searching all elements. <br />
        <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O( √n).
        <br />
        <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1).
        <br />
        <span style={{ fontWeight: "bold" }}>Important points:</span>
        <li>Works only sorted arrays.</li>
        <li>
          The optimal size of a block to be jumped is (√n). This makes the time
          complexity of Jump Search O(√n).
        </li>
        <li>
          The time complexity of Jump Search is between Linear Search ((O(n))
          and Binary Search (O(log n)).
        </li>
        <li>
          Binary Search is better than Jump Search, but Jump search has an
          advantage that we traverse back only once (Binary Search may require
          up to O(Log n) jumps, consider a situation where the element to be
          searched is the smallest element or smaller than the smallest). So in
          a system where binary search is costly, we use Jump Search.
        </li>
      </div>
    ),
  };
  return (
    <Slide
      direction="right"
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={2500}
    >
      <div style={{ display: "inline-block" }}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <LightTooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={description[alg]}
            classes={{ tooltip: classes.custom }}
            placement="bottom"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton aria-label="information" onClick={handleTooltipOpen}>
              <InfoIcon className={classes.info} />
            </IconButton>
          </LightTooltip>
        </ClickAwayListener>
      </div>
    </Slide>
  );
}
