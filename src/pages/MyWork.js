import React from "react";
import Project from "../components/Project";
import Data from "../data/Data";
import classes from "./MyWork.module.css";

const MyWork = () => {
  const projectsData = Data.map((data) => {
    return (
      <Project
        key={data.id}
        title={data.title}
        description={data.description}
        technologies={data.technologies}
        img={data.img}
        links={data.links}
      />
    );
  });
  return (
    <>
      <h1 className={classes.h1}>View some of my work</h1>
      <div className={classes.wrapper}>{projectsData}</div>
    </>
  );
};

export default MyWork;
