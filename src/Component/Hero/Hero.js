import classes from "./Hero.module.css";
import model from "../../Assets/Images/model.png";
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
      >
        <div className={classes.CTA_wrapper}>
          <div className={classes.CTA_innerWrapper}>
            <div
              className={classes.modelWrapper}
              style={{ backgroundImage: `url(${model})` }}
            ></div>
            <div className={classes.callToAction}>
              <div className={classes.textWrapper}>
                <h1 className={classes.heroHeader}>
                  Upgrade your wardrobe with <span>NM Boutique</span> this
                  summer
                </h1>
                <p className={classes.Herotext}>
                  With our all encompassing clothing range we've got you covered
                </p>
              </div>
              <button className={classes.CTA_btn}>Visit NM Boutique</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
