import classes from "./Hero.module.css";
import boutique from "../../Assets/Images/boutique.jpg";
import { PRIMARY_COLOR } from "../../Constants/Colors";

const Hero = (props) => {
  return (
    <>
      <div className={classes.buffer}></div>
      <div
        className={classes.Hero}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80)`,
        }}
      ></div>
    </>
  );
};

export default Hero;
