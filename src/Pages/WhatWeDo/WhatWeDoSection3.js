
import Cards from "../WhatWeDo/Components/Card/Cards";
import classes from "./WhatWeDo.module.css";
import cars from "../../Assets/Images/catering.jpg";
import React, { useState } from "react";
import { PRIMARY_COLOR } from "../../Constants/Colors";
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
const WhatWeDoSection3 = () => {
  return (
    <>
    
      <div className={classes.mainContainerSection3}>
        <div className={classes.imageContainer}>
          <img src={cars} alt="cars" className={classes.firstImage} />
        </div>
        <div className={classes.section3Div}>
          <p className={classes.titleSection3}>Title</p>
          <p className={classes.descriptionSection3}>
            Lorem Ipsum is simply dummy text of the gtfd house printing and
            typesettingindustry. Lorem Ipsum has been the industry's standard
            dummy. NM Cuts Transport Lorem Ipsum is simply dummy text of the
            gtfd house printing and typesettingindustry. Lorem Ipsum has been
            the industry's standard dumm
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
                to="about"
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
};

export default WhatWeDoSection3;
