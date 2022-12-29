import Cards from "../WhatWeDo/Components/Card/Cards";
import classes from "./WhatWeDo.module.css";
import cars from "../../Assets/Images/catering.jpg";
import beutique from "../../Assets/Images/Clothing.jpg";
import React, { useState } from "react";
import { PRIMARY_COLOR } from "../../Constants/Colors";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const WhatWeDoSection3 = () => {
  return (
    <>
    <h1 className={classes.title}>What We Do?</h1>
      <div className={classes.mainContainerSection3a}>
        <div className={classes.imageContainera}>
          <img src={cars} alt="cars" className={classes.firstImagea} />
        </div>
        <div className={classes.section3Diva}>
          <p className={classes.titleSection3}>NM Cuts Catering</p>
          <p className={classes.descriptionSection3a}>
            We provide top quality catering services at affordable prices and
            incredible food that will have your guests talking. Our food is our
            business Each client is uniquely important to us. We work closely
            with our customers to ensure every detail is correct. Our aim is to
            deliver customer satisfaction through high quality food, and top
            class service, at competitive and affordable prices We will create
            the event you have dreamed about for your special day.
           
          </p>
        </div>
      </div>
      <div className={classes.mainContainerSection3b}>
      <div className={classes.section3Divb}>
          <p className={classes.titleSection3}>NM Cuts Beautique</p>
          <p className={classes.descriptionSection3b}>
            We provide top quality catering services at affordable prices and
            incredible food that will have your guests talking. Our food is our
            business Each client is uniquely important to us. We work closely
            with our customers to ensure every detail is correct. Our aim is to
            deliver customer satisfaction through high quality food, and top
            class service, at competitive and affordable prices We will create
            the event you have dreamed about for your special day.
           
          </p>
        </div>
        <div className={classes.imageContainerb}>
          <img src={beutique } alt="cars" className={classes.firstImageb} />
        </div>
 
      </div>
    </>
  );
};

export default WhatWeDoSection3;
