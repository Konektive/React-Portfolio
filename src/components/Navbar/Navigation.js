import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import classes from "./Navbar.module.css";

const Navigation = (props) => {
  return (
    <>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/mywork"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              About me
            </NavLink>
          </li>
          <li className={classes.socials}>
            <a href="https://www.linkedin.com/in/krystian-sporysz-2b9390214/">
              <FaLinkedin />
            </a>
          </li>
          <li className={classes.socials}>
            <a href="https://www.facebook.com/krystian.sporysz/">
              <FaFacebook />
            </a>
          </li>
          <li className={classes.socials}>
            <a href="https://www.instagram.com/krystian_sporysz/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                props.showForm();
              }}
            >
              Let's talk!
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
