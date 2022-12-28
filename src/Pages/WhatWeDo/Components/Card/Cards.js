import React from 'react';
import classes from './Cards.module.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';
import image1 from "../../../../Assets/Images/Clothing.jpg"
import image2 from "../../../../Assets/Images/catering.jpg"
import image3 from "../../../../Assets/Images/transport.webp"
import image4 from "../../../../Assets/Images/couch.webp"


function Cards() {
  return (
    <div className={classes.cards}>
      <h1>Our Product Services</h1>
      <div className={classes.cards__container}>
        <div className={classes.cards__wrapper}>
          <ul className={classes.cards__items}>
            <CardItem
             src={image1}
            />
            <CardItem
            src={image2}
            />
                <CardItem
             src={image3}
            />
            <CardItem
         src={image4}
            />
          </ul>
          <ul className={classes.cards__items}>
          <CardItem2
              text='Get the latest fashion trends with NM Cuts Beautique'
            />
               <CardItem2
              text='Get the fresh meat and best catering experience with NM Cuts Catering'
            />
               <CardItem2
              text='Recieve the best travel experience with NM Cuts Transport'
            />
               <CardItem2
              text='Experience the most comfortable  rests and home look  with NM Cuts Furniture'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
