import React from "react";
import classes from "./Cards.module.css";

import image1 from "../../../../Assets/Images/Clothing.jpg";
import image2 from "../../../../Assets/Images/catering.jpg";
import image3 from "../../../../Assets/Images/transport.webp";
import image4 from "../../../../Assets/Images/couch.webp";

const Cards = () => {
  return (
   <div className={classes.card}>
      <h1>Our Service Products</h1>
      <div className={classes.cards_container}>
      <div className={classes.cards_wrapper}>
      <div className={classes.cards}>
        <div className={classes.cards_image}>
          <img src={image1} />
        </div>
        <div>
          <p className={classes.cards_header}>NM Cuts Beautique</p>
          <p className={classes.cards_paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={classes.cards_image}>
          <img src={image2} />
        </div>
        <div>
          <p className={classes.cards_header}>NM Cuts Catering</p>
          <p className={classes.cards_paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={classes.cards_image}>
          <img src={image3} />
        </div>
        <div>
          <p className={classes.cards_header}>NM Cuts Transport</p>
          <p className={classes.cards_paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={classes.cards_image}>
          <img src={image4} />
        </div>
        <div>
          <p className={classes.cards_header}>NM Cuts Furniture</p>
          <p className={classes.cards_paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>
      </div>
      </div>
</div>
  );
};

export default Cards;
