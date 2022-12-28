import React from "react";
import classes from  './About.module.css'
import AboutUsSection1 from "./AboutUsSection1";
const About = () => {
    return <div
        
        className={classes.aboutUsWrapper}>
        <AboutUsSection1/>
    </div>;
};

export default About;
