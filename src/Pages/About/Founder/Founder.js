import React from 'react'
import classes from "./Founder.module.css";
import founder from '../../../Assets/Images/founder0.JPG'
import svg from '../../../Assets/Images/wave.svg'
import svgTop from "../../../Assets/Images/waveT.svg";
const Founder = () => {
  return (
    <div className={classes.founderWrapper}>
      {/* <div className={classes.founderTopSvg}></div> */}
      <div className={classes.founderInnerWrapper}>
        <div className={classes.founderSubjectContainer}>
          <div className={classes.founderSubjectLine}>Founder</div>
          <div className={classes.founderMiniSubject}>& CEO</div>
        </div>
        <div className={classes.founderContainer}>
          <div className={classes.founderTextContainer}>
            <h1>Lorem Ipsum</h1>
            <p>
              <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </p>
          </div>
          <div className={classes.founderImageContainer}>
            <img src={founder} className={classes.founderImage} />
          </div>
        </div>
      </div>
      <img src={svg} className={classes.founderBottomSvg} />
      <div className={classes.foundedCard}>
        <div>
           founded in Lorem Ipsum dolor sit amet, consectetur
        </div>
      </div>
    </div>
  );
}

export default Founder