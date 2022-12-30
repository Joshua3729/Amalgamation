import classes from "./ContactUs.module.css";
import frame from "../../../Assets/Images/frame2.png";
import getInTouch from "../../../Assets/Images/getintouch.jpg";

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
          <div className={classes.contactUsCard}></div>
          <div className={classes.contactUsCard}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
