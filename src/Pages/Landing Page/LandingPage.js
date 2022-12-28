import Hero from "../../Component/Hero/Hero";
import classes from "./LandingPage.module.css";
import WhoAreWe from "./WhoAreWe/WhoAreWe";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Hero />
      <WhoAreWe />
    </div>
  );
};

export default LandingPage;
