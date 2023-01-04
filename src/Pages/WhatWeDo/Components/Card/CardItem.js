import classes from "./CardItem.module.css";
import { Link } from "react-router-dom";
const CardItem  = ({  header, description }) => {
  return (
   
      <div className={classes.textWrapper}>
        <div className={classes.cardHeader}>{header}</div>
        <div className={classes.cardDescreption}>{description}</div>
        
      </div>
 
  );
};



export default CardItem;