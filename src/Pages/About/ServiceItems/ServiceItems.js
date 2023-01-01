import React from "react";
import classes from "./ServiceItems.module.css";
import ServiceDisplayCard from "../../../Component/ServiceDisplayCard/ServiceDisplayCard";
import clothes1 from "../../../Assets/Images/clothes1.jpeg";
import catering from "../../../Assets/Images/catering3.jpg";
import taxi from "../../../Assets/Images/taxi.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import furniture from "../../../Assets/Images/couch2.jpg";

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
              image={clothes1}
            />
          </div>
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Cuts Catering™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={catering}
            />
          </div>
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Tours Transportation™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={taxi}
            />
          </div>
          <div className={classes.eachItem}>
            <ServiceDisplayCard
              subject="NM Cuts Furniture™"
              description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={furniture}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceItems;
