import Hero from "../../Component/Hero/Hero";
import classes from "./LandingPage.module.css";
import OurServices from "./OurServices/OurServices";
import WhoAreWe from "./WhoAreWe/WhoAreWe";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Hero />
      <WhoAreWe />
      <OurServices />
    </div>
  );
};

export default LandingPage;
