import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

export default function VariableWidth() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false); // open tooltip

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const description = {
    "selection":
   "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.",

  };
  return (
    <div>
<Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button className={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
      <ClickAwayListener  onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title= {<span style={{fontSize: "1.5em"}}>{description["selection"]}</span>}
        classes={{ tooltip: classes.customWidth }}
        arrow
      >
        <IconButton aria-label="information" onClick={handleTooltipOpen}>
          <InfoIcon className={classes.info} />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
    </div>     
    
  );
}