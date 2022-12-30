import Hero from "../../Component/Hero/Hero";
import ContactUs from "./ContactUs/ContactUs";
import classes from "./LandingPage.module.css";
import OurServices from "./OurServices/OurServices";
import Testimonial from "./Testimonials/Testimonials";
import WhoAreWe from "./WhoAreWe/WhoAreWe";

const LandingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <Hero />
      <WhoAreWe />
      <OurServices />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
