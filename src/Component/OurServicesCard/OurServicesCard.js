import classes from "./OurServicesCard.module.css";
import { Link } from "react-router-dom";

const OurServicesCard = ({ image, header, description, link }) => {
  return (
    <div className={classes.ourServicesCard}>
      <div
        className={classes.imgWrapper}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className={classes.textWrapper}>
        <div className={classes.cardHeader}>{header}</div>
        <div className={classes.cardDescreption}>{description}</div>
        <div className={classes.linkWrapper}>
          <Link className={classes.readMore_link}>
            See More <i className="fas fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServicesCard;
