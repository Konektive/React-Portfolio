import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Navbar.module.css";
import { useState } from "react";

const MobileNav = (props) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <div className={classes.mobileNavigation}>
        {mobileNav ? (
          <AiOutlineClose onClick={toggleNav} className={classes.bars} />
        ) : (
          <FaBars onClick={toggleNav} className={classes.bars} />
        )}
        {mobileNav && (
          <nav>
            <ul>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to="/welcome"
                >
                  Welcome
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to="/mywork"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
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
                    toggleNav();
                  }}
                >
                  Let's talk!
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default MobileNav;
