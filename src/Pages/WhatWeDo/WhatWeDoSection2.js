import React from 'react';
import classes from "./WhatWeDo.module.css";
import image2 from "../../Assets/Images/catering.jpg"
import image1 from "../../Assets/Images/Clothing.jpg";
import image3 from "../../Assets/Images/transport.webp";
import image4 from "../../Assets/Images/boutique.jpg";
import { Link } from "react-router-dom";
import OurServicesCard from "../WhatWeDo/Components/Card/OurServiceCard";


const  WhatWeDoSection2 = () => {
  return (
    <div className={classes.OurServices}>
      <div className={classes.OurServices_innerWrapper}>
        <div className={classes.headerWrapper}>
          <h1 className={classes.title}> Services/Products</h1>
        </div>
        <div className={classes.gridWrapper}>
          <div className={classes.gridBuffer}></div>
          <div className={classes.OurServices_cardWrapper}>
            <OurServicesCard
              image={image1}
               
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
              header={"NM Cuts Boutique"}
              
            />
                     <OurServicesCard
              image={image2}
               
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
              header={"NM Cuts Boutique"}
              
            />
            <OurServicesCard
              image={image3}
              
              header={"NM Cuts Catering"}
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
             
            />
            <OurServicesCard
              image={image4}
            
              header={"NM Tours Transportation"}
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
             
            />

           
          </div>
        </div>
      </div>
    </div>
  );
};




export default WhatWeDoSection2;
