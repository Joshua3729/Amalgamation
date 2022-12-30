import React, { useEffect, useRef, useState } from "react";
import classes from "./SlideShow2.module.css";
import imgFrame from "../../Assets/Images/frame.png";

const SlideShow2 = ({ slidesData }) => {
  const delay = 5000;
  const [tab, setTab] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const next = () => {
    setTab((tab) => {
      if (tab === slidesData.length - 1) {
        return 0;
      } else {
        return tab + 1;
      }
    });
  };
  const prev = () => {
    setTab((tab) => {
      if (tab === 0) {
        return slidesData.length - 1;
      } else {
        return tab - 1;
      }
    });
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setTab((prevIndex) =>
          prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [tab]);

  let slides = slidesData.map((slide, index) => {
    return (
      <>
        <div className={classes.slide}>
          <div className={classes.TestimonialCard}>
            <div
              className={classes.imagePaneWrapper}
              style={{
                backgroundImage: `linear-gradient(${slide.color}, ${slide.color}), url(${slide.profile})`,
              }}
            >
              <img src={imgFrame} alt="" />
              {/* <img
              src=""
              alt=""
              className={classes.profile}
            /> */}
            </div>
            <div className={classes.testimonialTextWrapper}>
              <h4 className={classes.name}>{slide.name}</h4>
              <p className={classes.testimonialText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi culpa quod repellat laborum delectus molestias iure
                beatae. Aliquam, dicta porro possimus similique laboriosam est
                vel provident rem repudiandae, unde asperiores?
              </p>
            </div>
          </div>
        </div>
      </>
    );
  });

  const slideDots = slidesData.map((slide, index) => {
    return (
      <button
        onClick={() => setTab(index)}
        className={[
          classes.slideDot_btn,
          index === tab ? classes.dotActive : null,
        ].join(" ")}
      ></button>
    );
  });

  return (
    <div className={classes.slideshow}>
      <div className={classes.buttonsWrapper}>
        <div className={classes.buttonInnerWrapper}>
          <button className={classes.slideButton} onClick={() => prev()}>
            <i className="fas fa-solid fa-chevron-left"></i>
          </button>
          <button className={classes.slideButton} onClick={() => next()}>
            <i className="fas fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-tab * 100}%, 0, 0)` }}
      >
        {slides}
      </div>
      <div className={classes.slideShowDots}>{slideDots}</div>
    </div>
  );
};

export default SlideShow2;
