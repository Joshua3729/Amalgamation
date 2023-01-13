import React from 'react'
import classes from "./Contact.module.css";
import Typewriter from "typewriter-effect";
import { BiPhoneCall } from 'react-icons/bi'
import { MdOutlineLocationOn } from "react-icons/md";
import {AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
  const iconSize = 25;
  return (
    <div className={classes.contactUsWrapper}>
      <div className={classes.contactUsTodayTextWrapper}>
        <h3>contact us today.</h3>
        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contactTextContainer}>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className={classes.iconsContainer}>
            <div>
              <div className={classes.icon}>
                <BiPhoneCall size={iconSize} />{" "}
              </div>
              <p className={classes.iconText}>call us today</p>
            </div>

            <div>
              <div className={classes.icon}>
                {" "}
                <AiOutlineMail size={iconSize} />{" "}
              </div>
              <p className={classes.iconText}>Send an email</p>
            </div>
            <div>
              <div className={classes.icon}>
                {" "}
                <MdOutlineLocationOn size={iconSize} />{" "}
              </div>
              <p className={classes.iconText}>visit our HQ</p>
            </div>
          </div>
        </div>
        <form>
          <div className={classes.typeWriterMessage}>
            <Typewriter
              options={{
                strings: ["Get in touch...", "with NM Amalgamation group."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={classes.parallelInputs}>
            <input
              value={""}
              placeholder={"Name(s)"}
              className={classes.removeDefaultStyle}
            ></input>
            <input
              value={""}
              placeholder={"Email"}
              className={classes.removeDefaultStyle}
            ></input>
          </div>
          <input
            value={""}
            className={[classes.loneInput, classes.removeDefaultStyle].join(" ")}
            placeholder={"Subject"}
          ></input>
          <textarea
            className={[classes.textArea, classes.removeDefaultStyle].join(" ")}
            placeholder={"Message"}
          ></textarea>
          <button type="submit" className={classes.buttonSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact