import React from 'react'
import classes from "./About.module.css";
import Typewriter from "typewriter-effect";
const Contact = () => {
  return (
    <div className={classes.contactUsWrapper}>
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
            <input value={""} placeholder={"Name(s)"}></input>
            <input value={""} placeholder={"Email"}></input>
          </div>
          <input value={""} className={classes.loneInput} placeholder={"Subject"}></input>
          <textarea className={classes.textArea} placeholder={"Message"}></textarea>
          <button type='submit' className={classes.buttonSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact