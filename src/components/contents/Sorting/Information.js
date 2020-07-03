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
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 500,
    opacity: 0.9,
  },
}))(Tooltip);

export default function Information({ alg, ver }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false); // open tooltip

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const description = {
    selection: {
      original: (
        <span style={{ fontSize: "0.8rem" }}>
          The selection sort algorithm sorts an array by repeatedly finding the
          minimum element (considering ascending order) from unsorted part and
          putting it at the beginning. <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
          <sup>2</sup>) as there are two nested loops. <br />
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1){" "}
          <br />
          <span style={{ fontWeight: "bold" }}>The good thing</span> about
          selection sort is it never makes more than O(n) swaps and can be
          useful when memory write is a costly operation.
        </span>
      ),
    },
    bubble: {
      original: (
        <span style={{ fontSize: "0.8rem" }}>
          Bubble Sort is the simplest sorting algorithm that works by repeatedly
          swapping the adjacent elements if they are in wrong order. This
          algorithm needs totally N passes, loops from the first element to the
          unsorted element in each pass. The first sorted element will be the
          largest one (in ascendant order). <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
          <sup>2</sup>) for Worst (reverse sorted) and Average Case. O(n) for
          Best case (already sorted). <br />
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1){" "}
          <br />
          <span style={{ fontWeight: "bold" }}>The bad thing</span> is when the
          array is already sorted, but the algorithm does not know if it is
          completed.
        </span>
      ),
      optimize: (
        <span style={{ fontSize: "0.8rem" }}>
          Bubble Sort is the simplest sorting algorithm that works by repeatedly
          swapping the adjacent elements if they are in wrong order. This
          algorithm needs totally N passes, loops from the first element to the
          unsorted element in each pass. The first sorted element will be the
          largest one (in ascendant order). <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
          <sup>2</sup>) for Worst (reverse sorted) and Average Case. O(n) for
          Best case (already sorted). <br />
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1){" "}
          <br />
          <span style={{ fontWeight: "bold" }}>The good thing</span> is this
          time the algorithm will stop when there is no swap occurs in one pass.
          It help reducing the number of comparisons that the algorithm have
          needed to do before optimization, swap iterations stay the same.
        </span>
      ),
      recursive: (
        <span style={{ fontSize: "0.8rem" }}>
          Bubble Sort is implemented with recursion. Recursive Bubble Sort has
          no performance/implementation advantages, but can be a good question
          to check one’s understanding of Bubble Sort and recursion. <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(n
          <sup>2</sup>) for Worst (reverse sorted) and Average Case. O(n) for
          Best case (already sorted). <br />
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1){" "}
          <br />
          <span style={{ fontWeight: "bold" }}>The idea thing</span> <br />
          If we take a closer look at Bubble Sort algorithm, we can notice that
          in first pass, we move largest element to end (Assuming sorting in
          increasing order). In second pass, we move second largest element to
          second last position and so on. <br />
          1. Base Case: If array size is 1, return. <br />
          2. Do One Pass of normal Bubble Sort. This pass fixes last element of
          current subarray. <br />
          3. Recur for all elements except last of current subarray. <br />
        </span>
      ),
    },
    quick: {
      original: (
        <span style={{ fontSize: "0.8rem" }}>
          QuickSort is a Divide and Conquer algorithm. It picks an element as
          pivot and partitions the given array around the picked pivot. There
          are many different versions of quickSort that pick pivot in different
          ways.
          <br />
          1. Always pick first element as pivot. <br />
          2. Always pick last element as pivot (implemented below) <br />
          3. Pick a random element as pivot. <br />
          4. Pick median as pivot. <br />
          The key process in quickSort is partition(). Target of partitions is,
          given an array and an element x of array as pivot, put x at its
          correct position in sorted array and put all smaller elements (smaller
          than x) before x, and put all greater elements (greater than x) after
          x. All this should be done in linear time. <br />
          <span style={{ fontSize: "0.7rem" }}>
            <span style={{ fontWeight: "bold" }}>Partition Algorithm:</span>{" "}
            There can be many ways to do partition. The logic is simple, we
            start from the leftmost element and keep track of index of smaller
            (or equal to) elements as i. While traversing, if we find a smaller
            element, we swap current element with arr[i]. Otherwise we ignore
            current element.
          </span>{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span>
          <li>
            Worst case (occur when array is already sorted and choose first or
            last element as pivot): O(n<sup>2</sup>)
          </li>
          <li>Average and Best case: O(nlogn) </li>.
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1) - it
          uses extra space only for storing recursive function calls but not for
          manipulating the input. <br />
          <span style={{ fontWeight: "bold" }}>The good thing</span> Although
          the worst case time complexity of QuickSort is O(n<sup>2</sup>) which
          is more than many other sorting algorithms like Merge Sort and Heap
          Sort, QuickSort is faster in practice, because its inner loop can be
          efficiently implemented on most architectures, and in most real-world
          data. QuickSort can be implemented in different ways by changing the
          choice of pivot, so that the worst case rarely occurs for a given type
          of data. However, merge sort is generally considered better when data
          is huge and stored in external storage. <br />
        </span>
      ),
      iterative: (
        <span style={{ fontSize: "0.8rem" }}>
          Iterative Quick Sort is an iterative version of Quick sort algorithm
          that don't need extra space for recursive function call stack with the
          help of an auxiliary stack. Partition process is same in both
          recursive and iterative. The same techniques to choose optimal pivot
          can also be applied to iterative version. <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span>
          <li>
            Worst case (occur when array is already sorted and choose first or
            last element as pivot): O(n<sup>2</sup>)
          </li>
          <li>Average and Best case: O(nlogn) </li>.
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(1){" "}
          <br />
          <span style={{ fontWeight: "bold" }}>The good thing</span> in
          iterative version is we can watch the algorithm process more
          explicitly in each partition of the array. <br />
        </span>
      ),
    },
    merge: {
      original: (
        <span style={{ fontSize: "0.8rem" }}>
          Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It
          divides input array in two halves, calls itself for the two halves and
          then merges the two sorted halves. The merge() function is used for
          merging two halves. The merge(arr, left, middle, right) is key process
          that assumes that arr[left..middle] and arr[middle+1..right] are
          sorted and merges the two sorted sub-arrays into one. <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(nLogn)
          in all 3 cases (worst, average and best) as merge sort always divides
          the array into two halves and take linear time to merge two halves..{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(n){" "}
          <br />
          <span style={{ fontWeight: "bold" }}>
            Applications of Merge Sort
          </span>{" "}
          <br />
          <li>
            1. Merge Sort is useful for sorting linked lists in O(nLogn) time.In
            the case of linked lists, the case is different mainly due to the
            difference in memory allocation of arrays and linked lists.
          </li>
          <li>
            2. Inversion Count Problem: Inversion Count for an array indicates –
            how far (or close) the array is from being sorted. If array is
            already sorted then inversion count is 0. If array is sorted in
            reverse order that inversion count is the maximum.
          </li>
          <li>
            3. Used in External Sorting: External sorting is a class of sorting
            algorithms that can handle massive amounts of data. External sorting
            is required when the data being sorted do not fit into the main
            memory of a computing device (usually RAM) and instead they must
            reside in the slower external memory, usually a hard disk drive.
            Thus, external sorting algorithms are external memory algorithms and
            thus applicable in the external memory model of computation. (Wikipedia)
          </li>
        </span>
      ),
      iterative: (
        <span style={{ fontSize: "0.8rem" }}>
          Unlike Iterative QuickSort, the iterative MergeSort doesn’t require explicit auxiliary stack. <br />
          <span style={{ fontWeight: "bold" }}>Time Complexity:</span> O(nLogn)
          in all 3 cases (worst, average and best) as merge sort always divides
          the array into two halves and take linear time to merge two halves..{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>Auxiliary Space:</span> O(n){" "}
        </span>
      ),
    },
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
        title={description[alg][ver]}
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
