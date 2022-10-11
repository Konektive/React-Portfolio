import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../assets/Logo.svg";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

const Navbar = (props) => {
  return (
    <>
      <header className={classes.header}>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/welcome"
        >
          <img src={Logo} alt="Logo" />
        </NavLink>
        <MobileNav showForm={props.showForm} />
        <Navigation showForm={props.showForm} />
      </header>
    </>
  );
};

export default Navbar;
