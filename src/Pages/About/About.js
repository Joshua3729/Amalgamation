import classes from  './About.module.css'
import AboutUs from '../About/AboutUs/AboutUs'
import Mission from '../About/Mission/Mission'
import Founder from '../About/Founder/Founder'
import Contact from '../About/Contact/Contact'
import {BsTriangle} from 'react-icons/bs'
import ServiceItems from './ServiceItems/ServiceItems'

import GeneralSlider from '../../Component/GeneralSlider/GeneralSlider'

const About = () => {
     
    return (
      <div className={classes.aboutUsWrapper}>
        <div id="aboutUsSection1">
          <AboutUs />
        </div>
        <div>
          <ServiceItems />
        </div>
        <div id="mission">
          <Mission />
        </div>
        <div id="founder">
          <Founder />
        </div>
        <div className={classes.divider}></div>
        <div id="contact">
          <Contact />
        </div>
        <div
          className={classes.triangleButton}
          onClick={() => {
            document
              .getElementById("aboutUsSection1")
              .scrollIntoView({ block: "start", behavior: "smooth" });
          }}
        >
          <BsTriangle size={28} />
        </div>
      </div>
    );
};

export default About;
