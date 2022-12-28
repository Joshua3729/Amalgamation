import classes from "./Navigation.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/Logo.jpeg";

const Navigation = ({ activeLink }) => {
  const [scroll, setScroll] = useState(false);

  const changeNavBarBGHandler = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavBarBGHandler);

  return ReactDOM.createPortal(
    <div
      className={
        scroll
          ? [classes.Navigation, classes.scroll].join(" ")
          : classes.Navigation
      }
    >
      <div className={classes.Navigation_innerWrapper}>
        <div className={classes.Logo_container}>
          <img src={logo} />
        </div>
        <ul className={classes.nav_list}>
          <li className={classes.nav_itemWrapper}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </li>
          <li className={classes.nav_itemWrapper}>
            <Link
              to="about"
              style={{
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </li>
          <li className={classes.nav_itemWrapper}>
            <Link
              to="whatWeDo"
              style={{
                textDecoration: "none",
              }}
            >
              What we do?
            </Link>
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("nav-bar")
  );
};

export default Navigation;
