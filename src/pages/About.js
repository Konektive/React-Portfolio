import React from "react";
import classes from "./About.module.css";
import img from "../assets/aboutimg.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const About = () => {
  return (
    <div className={classes.full}>
      <div className={classes.description}>
        <h1>About me</h1>
        <p>
          After graduating and getting myself an IT technician degree I decided
          to become a professional personal trainer. I made my first
          certification in February 2021. Since then I'm working with people,
          helping them to get into their dream shape. I'm also working with post
          injuries patients to get them to the state where They don't even
          remember they had their arm broken or a muscle torn. It makes me happy
          to see their smiles after a few months of work. At the beginning of
          2022, my friend have shown me his website made in React and I decided
          to get back on track with my IT career. I was learning just from the
          internet courses and YouTube videos and after a few months made my
          first website which u see now. I'm currently working on improving my
          UI/UX skills to make my websites look more encouraging.
        </p>
      </div>
      <div className={classes.border}>
        <img className={classes.photo} src={img} alt="" />
      </div>

      <div className={classes.technologies}>
        <div>
          <img className={classes.first} src={html} alt="" />
        </div>
        <div>
          <img className={classes.second} src={css} alt="" />
        </div>
        <div>
          <img className={classes.third} src={js} alt="" />
        </div>
        <div>
          <img className={classes.fourth} src={sass} alt="" />
        </div>
        <div>
          <img className={classes.fifth} src={react} alt="" />
        </div>
        <div>
          <img className={classes.sixth} src={tailwind} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
