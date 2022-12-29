import React from "react";
import classes from "./Cards.module.css";



const Cards = (props) => {
  return (
 
 <>
 <h1 className={classes.section2_tilte}>Our Product Services</h1>
 
 {props.details.map((value,index)=>(
      <div className={classes.cards} key={index}>
        <div className={classes.cards_image}>
          <img src={value.img} />
        </div>
        <div>
          <p className={classes.cards_header}>{value.title}</p>
          <p className={classes.cards_paragraph}>
            {value.description}
          </p>
      </div>
      </div>
      ))};
      </>

  );
};

export default Cards;
