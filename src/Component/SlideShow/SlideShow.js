import React, { useEffect, useRef } from "react";
import classes from "./SlideShow.module.css";

const SlideShow = ({ tab, setTab, images }) => {
  const delay = 5000;

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setTab((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [tab]);

  let slides = images.map((slide, index) => (
    <>
      <div
        className={classes.slide}
        style={{
          backgroundImage: `linear-gradient(rgba(200, 174, 255, 0.5),rgba(200, 174, 255, 0.7)),url(${slide.img})`,
        }}
      >
        <div className={classes.CTA_wrapper}>
          <div className={classes.CTA_innerWrapper}>
            <div
              className={classes.modelWrapper}
              style={{
                backgroundImage: `url(${slide.modelImg})`,
              }}
            ></div>
            <div className={classes.callToAction}>
              <div className={classes.textWrapper}>
                <h1
                  className={classes.heroHeader}
                  dangerouslySetInnerHTML={{ __html: slide.header }}
                ></h1>
                <p className={classes.Herotext}>
                  With our all encompassing clothing range we've got you covered
                </p>
              </div>
              <button className={classes.CTA_btn}>Visit NM Boutique</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-tab * 100}%, 0, 0)` }}
      >
        {slides}
      </div>
    </div>
  );
};

export default SlideShow;
