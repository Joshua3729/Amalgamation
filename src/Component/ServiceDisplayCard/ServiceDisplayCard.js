import classes from './ServiceDisplayCard.module.css';
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import image1 from "../../Assets/Images/catering.jpg";
import image2 from "../../Assets/Images/catering4.jpg";
import image3 from "../../Assets/Images/catering3.jpg";

const ServiceDisplayCard = (props) => {

  const images = [image1, image2, image3]
  const [imageIndex, setImageIndex] = useState(0);
  const timer = () => {
    setTimeout(() => {
      if (imageIndex < 2) {
        setImageIndex(imageIndex + 1)
      }
      else {
        setImageIndex(0);
      }
    },7000);
    
        
  }
  console.log(props.subject)
  return (
    <div className={classes.cardWrapper}>
      
      <div className={classes.imageContainer}>
        <img src={props.images[imageIndex]} className={classes.imageBg} />
      </div>
      <div className={classes.textContainer}>
        <h3>{props.subject}</h3>
        <p>
          {props.description}
          <p>
            <Link to="../whatWeDo" className={classes.button}>
              What we do ? <AiOutlineRight size={10} />
            </Link>
            {timer()}
          </p>
        </p>
      </div>
    </div>
  );
  }

export default ServiceDisplayCard