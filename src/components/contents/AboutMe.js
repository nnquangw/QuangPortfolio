import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./../Styles";
import photo from "../../images/NguyenNhatQuang-PHOTO.jpg";

import Paper from "@material-ui/core/Paper";

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.aboutMe}>
      <Paper className={classes.paper} elevation={3}>
        <h1>Nguyen Nhat Quang</h1>
        <p className={classes.pBorder}>
          <p style={{ color: "#c2185b" }}>General Information</p>
          -Born in: 1997
          <br />
          -Horoscope: Scorpio
          <br />
          -Hometown: Tay Ninh province, Vietnam
          <br />
          -Hobbies: Playing video games; Listening to music;
        </p>
        <img
          className={classes.imgStyle}
          src={photo}
          alt="Quang"
          width="25%"
          height="49%"
        />
        <p className={classes.pBorder}>
          <p style={{ color: "#c2185b" }}>Education</p>
          -Major: Computer Science
          <br />
          -Specialized in: Computer Vision
          <br />
          -Graduated from: Ho Chi Minh University of Science with GPA 7.82/10.0
          <br />
          -Subject learnt: Basic of Machine Learning and Deep Learning courses
          from online (VietAI) to offline (Machine Learning by Stanford)
          <br />
          -Progamming languages: Python, C++, C#, Javascript.
        </p>
        <p className={classes.pBorder2}>
          <p style={{ color: "#c2185b" }}>Objective</p>
          Have a job that relates to progamming and music. Although my
          progamming skills still not good, as well as my knowledge about music
          theory, I know I could be able to learn them slowly. This website I
          constructed through ReactJS framework, thing I never touch before, it
          contains my general information, algorithms visualization and some
          music apps.
        </p>
      </Paper>
    </div>
  );
}
