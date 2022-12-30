import React from 'react'
import classes from './ServiceDisplayCard.module.css';
import background from '../../Assets/Images/catering.jpg'
const ServiceDisplayCard = () => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imageContainer}>
        <img src={background} className={classes.imageBg} />
      </div>
      <div className={classes.textContainer}>
        <h3>Lorem Ipsum dolor sit amet</h3>
        <p>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default ServiceDisplayCard