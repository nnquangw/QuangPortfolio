import React from "react";
import { useStyles } from "./Styles";
import photo from "../images/NguyenNhatQuang-PHOTO.jpg";

import Paper from "@material-ui/core/Paper";
import { Grow } from "@material-ui/core";

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grow in={true} mountOnEnter unmountOnExit timeout={1000}>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.aboutMe}>
            <div className={classes.avatar}>
              <img className={classes.imgStyle} src={photo} alt="Quang" />
              <div className={classes.avatarText}>
                <span className={classes.text}>Nguyen Nhat Quang</span>
              </div>
            </div>
            <div className={classes.aboutMeCell}>
              <p
                style={{
                  color: "#c2185b",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                General Information
              </p>
              <ul>
                <span style={{ fontWeight: "bold" }}>Born in: </span>1997
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Horoscope: </span>Scorpio
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Hometown: </span>Tay Ninh
                province, Vietnam
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Hobbies: </span>Playing
                video games; Listening to music while working; Producing
                soundtracks;
              </ul>
            </div>
            <div className={classes.aboutMeCell}>
              <p
                style={{
                  color: "#c2185b",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Education
              </p>
              <ul>
                <span style={{ fontWeight: "bold" }}>Major: </span>Computer
                Science
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Specialized in: </span>
                Computer Vision
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Graduated from: </span>HCM
                city University of Science with{" "}
                <span style={{ fontWeight: "bold" }}>GPA 7.82/10.0</span>
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Subject learnt: </span>
                Basic of Machine Learning and Deep Learning courses from offline
                (VietAI) to online (Machine Learning by Stanford)
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>
                  Programming languages: Python, C++, C#, Javascript.
                </span>
              </ul>
              <ul>
                <span style={{ fontWeight: "bold" }}>Programming skill: </span>
                Average.
              </ul>
            </div>
            <div className={classes.aboutMeCell}>
              <p
                style={{
                  color: "#c2185b",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Objective
              </p>
              Have a job that relates to programming and music. Although my
              programming skills still not good, as well as my knowledge about
              music theory, I know I could be able to learn them. This website I
              constructed through ReactJS (a Javascript library), thing I never
              touch before, it contains my general information, algorithms
              visualization and some music apps.
            </div>
          </div>
        </Paper>
      </Grow>
    </div>
  );
}
