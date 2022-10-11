import React from "react";
import classes from "./Project.module.css";
import { FaGithubSquare } from "react-icons/fa";

const Project = (props) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.description}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <ul>
            <p>Technologies used:</p>
            {props.technologies.map((technology) => {
              return <li key={technology}>{technology}</li>;
            })}
          </ul>
          <ul className={classes.control}>
            <li>
              <a href={props.links[0]}>
                <FaGithubSquare className={classes.git} />
              </a>
            </li>
            <li className={classes.website}>
              <a href={props.links[1]}>Visit website!</a>
            </li>
          </ul>
        </div>
        <div className={classes.img}>
          <img src={props.img} alt={props.title} />
        </div>
      </div>
    </>
  );
};

export default Project;
