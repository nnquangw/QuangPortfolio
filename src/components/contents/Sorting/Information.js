import React from "react";
import { useStyles } from "./../../Styles";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import InfoIcon from "@material-ui/icons/Info";
import Zoom from "@material-ui/core/Zoom";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
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
    selection: (
      <span style={{ fontSize: "0.8rem" }}>
        The selection sort algorithm sorts an array by repeatedly finding the
        minimum element (considering ascending order) from unsorted part and
        putting it at the beginning. <br />
        <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
        <sup>2</sup>) as there are two nested loops. <br />
        <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1) <br />
        <span style={{ fontWeight: "bold" }}>The good thing</span> about
        selection sort is it never makes more than O(n) swaps and can be useful
        when memory write is a costly operation.
      </span>
    ),
    bubble: (
      <span style={{ fontSize: "0.8rem" }}>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly
        swapping the adjacent elements if they are in wrong order. This
        algorithm needs totally N passes, loops from the first element to the
        unsorted element in each pass. The first sorted element will be the
        largest one (in ascendant order). <br />
        <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
        <sup>2</sup>) for Worst (reverse sorted) and Average Case. O(n) for Best
        case (already sorted). <br />
        <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1) <br />
        <span style={{ fontWeight: "bold" }}>The bad thing</span> is when the
        array is already sorted, but the algorithm does not know if it is
        completed.
      </span>
    ),
    bubbleOptimized: (
      <span style={{ fontSize: "0.8rem" }}>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly
        swapping the adjacent elements if they are in wrong order. This
        algorithm needs totally N passes, loops from the first element to the
        unsorted element in each pass. The first sorted element will be the
        largest one (in ascendant order). <br />
        <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
        <sup>2</sup>) for Worst (reverse sorted) and Average Case. O(n) for Best
        case (already sorted). <br />
        <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1) <br />
        <span style={{ fontWeight: "bold" }}>The good thing</span> is this time
        the algorithm will stop when there is no swap occurs in one pass.
        It help reducing the number of comparisons that the algorithm have needed to do
        before optimization, swap iterations stay the same.
      </span>
    ),
  };
  return (
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
        placement="right"
        TransitionComponent={Zoom}
        arrow
      >
        <IconButton aria-label="information" onClick={handleTooltipOpen}>
          <InfoIcon className={classes.info} />
        </IconButton>
      </LightTooltip>
    </ClickAwayListener>
  );
}
