import React from 'react'
import classes from './Mission.module.css'
const Mission = () => {
  return (
    <div className={classes.missionWrapper}>
      <div className={classes.missionContainer}>
        <h1>Our Mission</h1>
        <p>
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
        </p>
      </div>
    </div>
  );
}

export default Mission