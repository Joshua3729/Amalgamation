import React, { useState } from "react";
import { PRIMARY_COLOR } from "../../../Constants/Colors";
import classes from "./AboutUs.module.css";
import { AiOutlineRight } from "react-icons/ai";
import ServiceDisplayCard from "../../../Component/ServiceDisplayCard/ServiceDisplayCard";
import { Link } from "react-router-dom";
import clothes1 from "../../../Assets/Images/clothes1.jpeg";
import catering from "../../../Assets/Images/catering3.jpg";
import taxi from "../../../Assets/Images/taxi.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutUsSection1 = () => {
  return (
    <>
      <div className={classes.gutter}></div>
      <div className={classes.AboutUsSection1}>
        <div className={classes.backdrop}></div>
        <div className={classes.wrapper}>
          <div className={classes.innerSectionWrapper}>
            <div className={classes.textWrapper}>
              <h1>WHO ARE WE?</h1>
              <p>
                NM Cuts catering is a proudly South African 100% black owned
                catering company based in Western Cape Province, Founded in 2020
                by Nosie Mkosi who chooses to be hands on in the business
                because of her love of food.
              </p>
              <Link
                to="../whatWeDo"
                className={classes.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  className={classes.discoverMoreButton}
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    cursor: "pointer",
                  }}
                >
                  <span>Discover more</span>
                  <AiOutlineRight className={classes.AiOutlineRight} />
                </div>
              </Link>
            </div>
            <div className={classes.innerNavWrapper}>
              <div>
                <h2 className={classes.navHeader}>COMPANY</h2>
              </div>
              <div className={classes.navList}>
                <div
                  onClick={() => {
                    document
                      .getElementById("mission")
                      .scrollIntoView({ block: "center", behavior: "smooth" });
                  }}
                >
                  <span>Mission </span>
                  <AiOutlineRight size={10} />
                </div>
                <div
                  onClick={() => {
                    document
                      .getElementById("founder")
                      .scrollIntoView({ block: "start", behavior: "smooth" });
                  }}
                >
                  <span>Founder </span>
                  <AiOutlineRight size={10} />
                </div>
                <div
                  onClick={() => {
                    document
                      .getElementById("contact")
                      .scrollIntoView({ block: "start", behavior: "smooth" });
                  }}
                >
                  <span>Contact us </span>
                  <AiOutlineRight size={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default AboutUsSection1;
