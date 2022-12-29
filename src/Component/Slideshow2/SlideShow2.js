import React, { useEffect, useRef, useState } from "react";
import classes from "./SlideShow2.module.css";

const SlideShow2 = ({ images }) => {
  const delay = 5000;
  const [tab, setTab] = useState(0);
  const timeoutRef = useRef(null);
  const array = [1, 2, 3, 4];
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
          prevIndex === array.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [tab]);

  let slides = array.map((slide, index) => {
    return (
      <>
        <div
          className={classes.slide}
          style={{
            backgroundImage: `linear-gradient(rgba(200, 174, 255, 0.5),rgba(200, 174, 255, 0.7)),url(${slide.img})`,
          }}
        ></div>
      </>
    );
  });

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

export default SlideShow2;
