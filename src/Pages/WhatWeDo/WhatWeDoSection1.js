import React from 'react'
import Subject from "../../Component/SubjectLine/Subject";
import WhatWeDoImg from "../../Assets/Images/WhatWeDo3rd.jpeg";
import classes from "./WhatWeDo.module.css";
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
       
   
        <Subject Subject="WhatWeDo" />
    </div>
    </div>
    </>
  );
}

export default WhatWeDoSection1;