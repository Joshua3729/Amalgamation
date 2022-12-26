import classes from "./Navigation.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <ul className={classes.nav_list}></ul>
    </div>,
    document.getElementById("nav-bar")
  );
};

export default Navigation;
