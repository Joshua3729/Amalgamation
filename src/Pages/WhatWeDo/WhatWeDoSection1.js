
import Subject from "../../Component/SubjectLine/Subject";
import WhatWeDoImg from "../../Assets/Images/WhatWeDo3rd.jpeg";
import classes from "./WhatWeDo.module.css";
import React, { useState } from "react";
import { PRIMARY_COLOR } from "../../Constants/Colors";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../App.css";

const WhatWeDoSection1 = () => {
  return (
    <>
    <div className={classes.section1Parent}>
      <div
        className={classes.innerWrapper}
        style={{
          backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.1), rgba(108, 117, 134, 0.1)), url(${WhatWeDoImg})`,
        }}
      ></div>

        
    <div className={classes.firstSection}>
  
   
        <Subject Subject="We Offers The Best Variety Of Product To Our Clients" />
        <div
            className={classes.discoverMoreButton}
            style={{
              backgroundColor: PRIMARY_COLOR,
              cursor: "pointer",
            }}
          >
            <span>
              <Link
                to="../whatWeDo"
                className={classes.link}
                style={{
                  textDecoration: "none",
                }}
              >
                Discover more
              </Link>
            </span>
            <AiOutlineRight size={20} />
          </div>
    </div>
   
    </div>
  
    </>
  );
}

export default WhatWeDoSection1;