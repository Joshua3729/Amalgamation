import React from 'react'
import classes from "./Footer.module.css";
import facebook from "../../Assets/social-media/facebook.png";
import linkedIn from "../../Assets/social-media/linkedin.png";
import instagram from "../../Assets/social-media/instagram.png";
import twitter from "../../Assets/social-media/twitter.png";
import whatsapp from "../../Assets/social-media/whatsapp.png";
import location from "../../Assets/Images/location.png";
import phoneCall from "../../Assets/Images/call.png";
import messageUs from "../../Assets/Images/message.png";
import Logo1 from "../UI/Logo/Logo";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.footer}>
        <div className={classes.innerDiv}>
          <div className={classes.flexDisplay}>
            <div className={classes.gridList}>
              <div className={classes.firstRow}>
                <div>
                  <div className={classes.logo}>
                    <Logo1/>
                  </div>

                  <div className={classes.logoMessage}>
                    Specialist in Retail Display for over 43 years
                  </div>
                  <div className={classes.socialMedia}>
                    <a>
                      <img
                        src={facebook}
                        className={classes.socialMediaIcons}
                        alt="facebook link"
                      />
                    </a>
                    <a>
                      <img
                        src={linkedIn}
                        className={classes.socialMediaIcons}
                        alt="facebook link"
                      />
                    </a>
                    <a>
                      <img
                        src={instagram}
                        className={classes.socialMediaIcons}
                        alt="instagram link"
                      />
                    </a>
                    <a>
                      <img
                        src={twitter}
                        className={classes.socialMediaIcons}
                        alt="twitter link"
                      />
                    </a>
                    <a>
                      <img
                        src={whatsapp}
                        className={classes.socialMediaIcons}
                        alt="whatsapp link"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.subjectLine}>location</div>
                <div className={classes.location}>
                  <div className={classes.icons}>
                    <img src={location} className={classes.iconsFooter} />
                  </div>

                  <div>23 mandela unibell.</div>
                </div>
              </div>
              <div>
                <div className={classes.subjectLine}>contact us</div>
                <div className={classes.contactUs}>
                  <div className={classes.icons}>
                    <img src={phoneCall} className={classes.iconsFooter}/>
                  </div>

                  <div>(+27) 71 234 5679</div>
                </div>
                <div className={classes.contactUs}>
                  <div className={classes.icons}>
                    <img src={messageUs} className={classes.iconsFooter} />
                  </div>

                  <div>(+27) 71 234 5679</div>
                </div>
              </div>
            </div>
            <div className={classes.divider}></div>
            <h1 className={classes.rights}>
              ©Copyrights 2022 All rights reserved, Designed by NMCuts Boutique.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer