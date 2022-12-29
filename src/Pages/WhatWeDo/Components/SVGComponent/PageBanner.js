import * as React from "react";
import classes from "./PageBanner.module.css";

const PageBanner = (props) => (
  <svg
    viewBox="0 0 2532 641"
    className={classes.PageBanner}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2532 191.937C2138.35 155.167 1915.37 209.806 1495 375.686L2532 552V191.937Z"
      fill="#31E1F7"
      fill-opacity="0.5"
    />
    <path
      d="M2532 268C2209.68 268.099 2066.17 285.982 1748 370.5L2532 639V268Z"
      fill="#ED028B"
      fill-opacity="0.5"
    />
    <path
      d="M999 614H0V190C298.288 477.333 555.088 455.888 911.077 477.768L962 614Z"
      fill="#ED028B"
      fill-opacity="0.5"
    />
    <path
      d="M536.912 560C326.845 525.186 209.282 487.186 0 391V632H726L536.912 560Z"
      fill="#31E1F7"
      fill-opacity="0.5"
    />
    {/* <path
      d="M812.047 514.053C511.678 578.538 335.143 594.831 0 574.48V641H2532V507.96C2337.61 441.62 2225.9 420.149 2024.6 393.707C1586.12 332.442 1321.8 362.812 812.047 514.053Z"
      fill="#31E1F7"
    /> */}
  </svg>
);
export default PageBanner;
