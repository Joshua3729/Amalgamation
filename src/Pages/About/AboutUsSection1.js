import React from "react";
import { PRIMARY_COLOR } from "../../Constants/Colors";
import classes from "./About.module.css";
import {AiOutlineRight} from 'react-icons/ai';
const AboutUsSection1 = () => {
  return (
    <div className={classes.AboutUsSection1}>
      <div className={classes.textWrapper}>
        <h1>WHO ARE WE?</h1>
        <p>
          NM Cuts catering is a proudly South African 100% black owned catering
          company based in Western Cape Province, Founded in 2020 by Nosie Mkosi
          who chooses to be hands on in the business because of her love of
          food.
        </p>
        <div
          className={classes.discoverMoreButton}
          style={{
              backgroundColor: PRIMARY_COLOR,
              cursor:"pointer",
          }}
        >
          <span>Discover more</span>
          <AiOutlineRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection1;
