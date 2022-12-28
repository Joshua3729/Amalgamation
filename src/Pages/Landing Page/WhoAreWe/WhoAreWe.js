import classes from "./WhoAreWe.module.css";
import logo from "../../../Assets/Images/logo2.png";

const WhoAreWe = (props) => {
  return (
    <div className={classes.WhoAreWe}>
      <div className={classes.innerWrapper}>
        <div className={classes.pointerWrapper}>WHO WE ARE</div>
        <div className={classes.companyImg}>
          <img
            src="https://graphicsfamily.com/wp-content/uploads/edd/2022/07/3D-office-wall-logo-mockup-with-dark-gray-wall-scaled.jpg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
