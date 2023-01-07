import React from 'react'
import classes from "./Footer.module.css";
import Logo1 from "../UI/Logo/Logo";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineMessage,
} from "react-icons/ai";
import {GoLocation} from 'react-icons/go'
import {BsTelephoneOutbound} from 'react-icons/bs'


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
                    <Logo1 />
                  </div>

                  <div className={classes.logoMessage}>
                    Specialist in Retail Display for over 43 years
                  </div>
                  <div className={classes.socialMedia}>
                    <a>
                      <AiOutlineFacebook
                        className={classes.socialMediaIcons}
                        alt="facebook link"
                      />
                    </a>
                    <a>
                      <AiOutlineLinkedin
                        className={classes.socialMediaIcons}
                        alt="facebook link"
                      />
                    </a>
                    <a>
                      <AiOutlineInstagram
                        className={classes.socialMediaIcons}
                        alt="instagram link"
                      />
                    </a>
                    <a>
                      <AiOutlineWhatsApp
                        className={classes.socialMediaIcons}
                        alt="whatsapp link"
                      />
                    </a>
                    <a>
                      <AiOutlineTwitter
                        className={classes.socialMediaIcons}
                        alt="twitter link"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.subjectLine}>location</div>
                <div className={classes.location}>
                  <div className={classes.icons}>
                    <GoLocation
                      className={classes.iconsFooter}
                    />
                  </div>

                  <div>23 mandela unibell.</div>
                </div>
              </div>
              <div>
                <div className={classes.subjectLine}>contact us</div>
                <div className={classes.contactUs}>
                  <div className={classes.icons}>
                    <BsTelephoneOutbound className={classes.iconsFooter} />
                  </div>

                  <div>(+27) 71 234 5679</div>
                </div>
                <div className={classes.contactUs}>
                  <div className={classes.icons}>
                    <AiOutlineMessage className={classes.iconsFooter} />
                  </div>

                  <div>(+27) 71 234 5679</div>
                </div>
              </div>
            </div>
            <div className={classes.divider}></div>
            <h1 className={classes.rights}>
              ©Copyrights 2022 All rights reserved, Designed by NMCuts
              Amalgamation.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer