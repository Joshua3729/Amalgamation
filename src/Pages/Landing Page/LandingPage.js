import Hero from "../../Component/Hero/Hero";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Hero />
    </div>
  );
};

export default LandingPage;
