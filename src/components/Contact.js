import React from "react";
import { useStyles } from "./Styles";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import { Icon } from "@iconify/react";
import SoundcloudIcon from "@iconify/icons-mdi/soundcloud";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";

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

export default function Contact() {
  const classes = useStyles();

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

      <LightTooltip
        title={<span style={{ fontSize: "1em" }}>+84-979-855-397</span>}
        arrow
      >
        <IconButton aria-label="phone" className={classes.contact}>
          <PhoneIcon style={{ color: "#fff" }} />
        </IconButton>
      </LightTooltip>

      <LightTooltip
        title={<span style={{ fontSize: "1em" }}>nnquang25@gmail.com</span>}
        arrow
      >
        <IconButton aria-label="phone" className={classes.contact}>
          <EmailIcon style={{ color: "#fff" }} />
        </IconButton>
      </LightTooltip>
    </div>
  );
}
