import React, { useState } from "react";
import classes from  './About.module.css'
import AboutUsSection1 from "./AboutUsSection1";
import Contact from "./Contact";
import Founder from "./Founder";
import Mission from "./Mission";


const About = () => {
     
    return (
      <div className={classes.aboutUsWrapper}>
        <div id="aboutUsSection1">
          <AboutUsSection1 />
        </div>

        <div id="mission">
          <Mission />
        </div>

        <div id="founder">
          <Founder />
        </div>
        <div id="contact">
          
          <Contact />
        </div>
      </div>
    );
};

export default About;
