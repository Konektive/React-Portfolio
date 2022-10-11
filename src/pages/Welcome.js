import { useState, useEffect } from "react";
import React from "react";
import classes from "./Welcome.module.css";
import img from "../assets/welcomeIcon.png";

const Welcome = () => {
  const [loopTitles, setLooptitles] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const myTitles = ["Web Developer", "Personal Trainer", "DownHill Lover"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopTitles % myTitles.length;
    let fullText = myTitles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3.5);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLooptitles(loopTitles + 1);
      setDelta(200);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.banner}>
          <h1>Hello! I'm Krystian</h1>
          <h1>
            {`I'm `}
            <span>{text}|</span>
          </h1>
          <p>
            I'm a Frontend Developer and Personal Trainer. I like to find new
            ways to improve both my IT and PT skills. My third love besides
            technology and helping people in a gym is downhill riding which was
            my dream since I was a child and now I'm making my dreams come true.
          </p>
        </div>
        <img className={classes.image} src={img} alt="" />
      </div>
    </>
  );
};

export default Welcome;
