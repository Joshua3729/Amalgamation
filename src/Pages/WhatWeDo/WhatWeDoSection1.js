
import Subject from "../../Component/SubjectLine/Subject";
import WhatWeDoImg from "../../Assets/Images/business5.jfif";
import classes from "./WhatWeDo.module.css";
// import CardItem from "./Components/Card/CardItem";
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
  
   
        <Subject  />
      
    </div>
   
    </div>
  
    </>
  );
}

export default WhatWeDoSection1;