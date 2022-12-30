import React from 'react';
import classes from "./WhatWeDo.module.css";

import img9 from "../../Assets/Images/avanza.jfif";
import img10 from "../../Assets/Images/avanza2.jfif";
import img11 from "../../Assets/Images/catering2.jfif";
import img12 from "../../Assets/Images/catering2.jfif";
import img13 from "../../Assets/Images/catering.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  
  };

  const WhatWeDoSection4 = () => {
    return (
      <>
         <h1 className={classes.title}>NM Amalgated Service Display</h1>
   <div className={classes.carouselContainer}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          arrows={false}
          renderDotsOutside={false}
          infinite={true}
        >
          <div>
            <img src={img9} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img10} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img11} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img12} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img13} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img9} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img12} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img13} className={classes.listItem} alt="list item" />
          </div>
        </Carousel>
        <div className={classes.headingForRows}>NM Cuts Beautique Product Display</div>
      </div>
</>
  );
}
export default WhatWeDoSection4