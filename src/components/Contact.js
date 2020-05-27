import React from "react";
import { useStyles } from "./Styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import { Icon } from "@iconify/react";
import SoundcloudIcon from "@iconify/icons-mdi/soundcloud";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function Contact() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleTooltipClose2 = () => {
    setOpen2(false);
  };

  const handleTooltipOpen2 = () => {
    setOpen2(true);
  };

  return (
    <div className={classes.contact}>
      <IconButton
        aria-label="soundcloud"
        className={classes.contact}
        href="https://soundcloud.com/woria-music"
        target="_blank"
      >
        <Icon icon={SoundcloudIcon} color="#fff" />
      </IconButton>
      <IconButton
        aria-label="facebook"
        className={classes.contact}
        href="https://facebook.com/quangwar"
        target="_blank"
      >
        <FacebookIcon style={{ color: "#fff" }} />
      </IconButton>
      <IconButton
        aria-label="instagram"
        className={classes.contact}
        href="https://instagram.com/nnquang_w"
        target="_blank"
      >
        <InstagramIcon style={{ color: "#fff" }} />
      </IconButton>
      <IconButton
        aria-label="github"
        className={classes.contact}
        href="https://github.com/nnquangw"
        target="_blank"
      >
        <GithubIcon style={{ color: "#fff" }} />
      </IconButton>

      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={<span style={{fontSize: "1.5em"}}>+84-979-855-397</span>}
            arrow
          >
            <IconButton
              aria-label="phone"
              className={classes.contact}
              onClick={handleTooltipOpen}
            >
              <PhoneIcon style={{color: "#fff"}}/>
            </IconButton>
          </Tooltip>
        </div>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={handleTooltipClose2}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose2}
            open={open2}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={<span style={{fontSize: "1.5em"}}>nnquang25@gmail.com</span>}
            arrow
          >
            <IconButton
              aria-label="phone"
              className={classes.contact}
              onClick={handleTooltipOpen2}
            >
              <EmailIcon style={{color: "#fff"}}/>
            </IconButton>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
}
