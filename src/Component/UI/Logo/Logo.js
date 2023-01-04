import logo from "../../../Assets/Images/Logo.jpeg";
import classes from "./Logo.module.css"
const Logo = () => {
    return (
      <>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" className={classes.logoIMage} />
        </div>
      </>
    );
};

export default Logo;
