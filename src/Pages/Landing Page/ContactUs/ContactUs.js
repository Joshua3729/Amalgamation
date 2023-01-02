import classes from "./ContactUs.module.css";
import frame from "../../../Assets/Images/bannerFrame2.png";
import getInTouch from "../../../Assets/Images/getintouch.jpg";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className={classes.ContactUs}>
      <div className={classes.contactUS_innerWrapper}>
        <div className={classes.infoWrapper}>
          <div className={classes.textWrapper}>
            <div className={classes.textInnerWrapper}>
              <h4 className={classes.header}>Get in touch</h4>
              <p className={classes.description}>
                Want to get in touch with us? Here's how you can reach us
              </p>
            </div>
          </div>
        </div>
        <div
          className={classes.imageWrapper}
          style={{ backgroundImage: `url(${getInTouch})` }}
        >
          <img src={frame} />
        </div>
      </div>
      <div className={classes.buffer}>
        <div className={classes.gridWrapper}>
          <div className={classes.contactUsCard}>
            <div className={classes.iconWrapper}>
              <div className={classes.iconInnerWrapper}>
                <BiPhoneCall size={70} />
                <p className={classes.callUsText}>Call us today</p>
              </div>
            </div>
            <div className={classes.cardDescriptionWrapper}>
              <p className={classes.cardDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                rerum nesciunt sed saepe numquam? Ullam maxime odit sint ducimus
              </p>
              <p className={classes.phoneNumber}>+2712-345-6789</p>
            </div>
          </div>
          <div className={classes.contactUsCard}>
            <div className={classes.iconWrapper}>
              <div className={classes.iconInnerWrapper}>
                <FaWhatsapp size={70} />
                <p className={classes.callUsText}>Message us on Whatsapp</p>
              </div>
            </div>
            <div className={classes.cardDescriptionWrapper}>
              <p className={classes.cardDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                rerum nesciunt sed saepe numquam? Ullam maxime odit sint ducimus
              </p>
              <p className={classes.phoneNumber}>+2712-345-6789</p>
            </div>
          </div>
          <div className={classes.contactUsCard}>
            <div className={classes.iconWrapper}>
              <div className={classes.iconInnerWrapper}>
                <FaEnvelopeOpenText size={70} />
                <p className={classes.callUsText}>Send us an Email</p>
              </div>
            </div>
            <div className={classes.cardDescriptionWrapper}>
              <p className={classes.cardDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                rerum nesciunt sed saepe numquam? Ullam maxime odit sint ducimus
              </p>
              <p className={classes.phoneNumber}>nmalgamation@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
