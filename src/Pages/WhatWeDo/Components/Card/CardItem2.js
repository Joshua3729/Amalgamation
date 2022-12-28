import React from 'react';
import classes from "./Cards.module.css"
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className={classes.cards__item}>
        <Link className={classes.cards__item__link} to={props.path}>
          <figure className={classes.cards__item__pic } data-category={props.label}>
            <img
              className={classes.cards__item__img}
            
              src={props.src}
            />
          </figure>
          <div className={classes.cards__item__info}>
            <h5 className={classes.cards__item__text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem2;