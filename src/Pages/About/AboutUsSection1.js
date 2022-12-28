import React from "react";
import { PRIMARY_COLOR } from "../../Constants/Colors";
import classes from "./About.module.css";
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
const AboutUsSection1 = () => {
  return (
    <>
      <div className={classes.AboutUsSection1}>
        <div className={classes.textWrapper}>
          <h1>WHO ARE WE?</h1>
          <p>
            NM Cuts catering is a proudly South African 100% black owned
            catering company based in Western Cape Province, Founded in 2020 by
            Nosie Mkosi who chooses to be hands on in the business because of
            her love of food.
          </p>
          <div
            className={classes.discoverMoreButton}
            style={{
              backgroundColor: PRIMARY_COLOR,
              cursor: "pointer",
            }}
          >
            <span>
              <Link
                to="whatWeDo"
                className={classes.link}
                style={{
                  textDecoration: "none",
                }}
              >
                Discover more
              </Link>
            </span>
            <AiOutlineRight size={24} />
          </div>
        </div>
      </div>
      <div className={classes.innerNavWrapper}>
        <div>
          
          <h2>COMPANY</h2>
        </div>
        <div className={classes.navList}>
          <div>vision</div>
          <div>contact us</div>
          <div>contact</div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection1;
