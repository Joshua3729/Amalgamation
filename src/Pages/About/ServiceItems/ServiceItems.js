import React from "react";
import classes from "./ServiceItems.module.css";
import ServiceDisplayCard from "../../../Component/ServiceDisplayCard/ServiceDisplayCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import boutique1 from "../../../Assets/Images/clothes1.jpeg";
import boutique2 from "../../../Assets/Images/clothes2.jpeg";
import boutique3 from "../../../Assets/Images/clothes3.jpeg";

import catering1 from "../../../Assets/Images/catering.jpg";
import catering2 from "../../../Assets/Images/catering3.jpg";
import catering3 from "../../../Assets/Images/catering4.jpg";

import transportation1 from "../../../Assets/Images/taxi.webp";
import transportation2 from "../../../Assets/Images/transport.webp";
import transportation3 from "../../../Assets/Images/taxi.webp";

import furniture1 from "../../../Assets/Images/couch2.jpg";
import furniture2 from "../../../Assets/Images/furniture3.jpeg";
import furniture3 from "../../../Assets/Images/furniture4.jpeg";

const ServiceItems = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={classes.ServiceItems}>
      <div className={classes.innerWrapper}>
        <Carousel
          swipeable={false}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // partialVisible
          pauseOnHover
          minimumTouchDrag={80}
          additionalTransfrom={0}
          // arrows
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          focusOnSelect={false}
          itemClass={classes.items}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          // customTransition="all .5"
          transitionDuration={1000}
          // containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          sliderClass=""
          slidesToSlide={1}
        >
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Cuts Boutique™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[boutique1, boutique2, boutique3]}
            />
          </div>
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Cuts Catering™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[catering1, catering2, catering3]}
            />
          </div>
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Tours Transportation™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[transportation1, transportation2, transportation3]}
            />
          </div>
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Cuts Furniture™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[furniture1, furniture2, furniture3]}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceItems;
