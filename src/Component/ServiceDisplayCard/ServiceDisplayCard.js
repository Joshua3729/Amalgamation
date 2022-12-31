import React from 'react'
import classes from './ServiceDisplayCard.module.css';
import background from '../../Assets/Images/catering.jpg'
import { AiOutlineRight } from "react-icons/ai";

const ServiceDisplayCard = (props) => {
  
  console.log(props.subject)
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imageContainer}>
        <img src={props.image} className={classes.imageBg} />
      </div>
      <div className={classes.textContainer}>
        <h3>{props.subject}</h3>
        <p>
          {props.description}
          <p>
            <button type="button" className={classes.button}>
              What we do ? <AiOutlineRight size={10} />
            </button>
          </p>
        </p>
      </div>
    </div>
  );
}

export default ServiceDisplayCard