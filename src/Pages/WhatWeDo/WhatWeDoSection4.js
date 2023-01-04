import React from 'react';
import classes from "./WhatWeDo.module.css";
import img1 from "../../Assets/Images/catering.jpg";
import img2 from "../../Assets/Images/catering2.jfif";
import img3 from "../../Assets/Images/catering4.jpg";
import img4 from "../../Assets/Images/catering5.jfif";
import img5 from "../../Assets/Images/catering6.jfif";
import img7 from "../../Assets/Images/avanza.jfif";
import img8 from "../../Assets/Images/quantum2.jfif";
import img9 from "../../Assets/Images/quantum3.jfif";
import img10 from "../../Assets/Images/quantum4.jfif";
import img11 from "../../Assets/Images/quantum.png";
import img12 from "../../Assets/Images/avanza2.jfif";
import img13 from "../../Assets/Images/clothes2.jpeg";
import img14 from "../../Assets/Images/clothes3.jpeg";
import img15 from "../../Assets/Images/clothes4.jpeg";
import img16 from "../../Assets/Images/clothes5.jpeg";
import img6 from "../../Assets/Images/clothes1.jpeg";
import img17 from "../../Assets/Images/couch2.jpg";
import img18 from "../../Assets/Images/furniture1.jpeg";
import img19 from "../../Assets/Images/furniture2.jpeg";
import img20 from "../../Assets/Images/furniture3.jpeg";
import img21 from "../../Assets/Images/furniture4.jpeg";
import img22 from "../../Assets/Images/furniture5.jpeg";

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
           <div className={classes.wrappers}>
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
            <img src={img6} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img16} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img15} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img14} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img13} className={classes.listItem} alt="list item" />
          </div>
        </Carousel>
        <div className={classes.headingForRows}>NM Cuts Beautique Product Display</div>
      </div>
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
            <img src={img17} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img18} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img19} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img20} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img21} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img22} className={classes.listItem} alt="list item" />
          </div>
          
        </Carousel>
        <div className={classes.headingForRows}>NM Cuts Furniture Product Display</div>
      </div>
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
            <img src={img1} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img2} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img3} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img4} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img5} className={classes.listItem} alt="list item" />
          </div>
        
        
        </Carousel>
        <div className={classes.headingForRows}>NM Cuts Catering Service Display</div>
      </div>
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
            <img src={img11} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img12} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img7} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img8} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img9} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img10} className={classes.listItem} alt="list item" />
          </div>
          
        </Carousel>
        <div className={classes.headingForRows}>NM Tours Transport Display</div>
      </div>
      </div>
</>
  );
}
export default WhatWeDoSection4