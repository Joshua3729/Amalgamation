import { Link } from "react-router-dom";
import OurServicesCard from "../../../Component/OurServicesCard/OurServicesCard";
import classes from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={classes.OurServices}>
      <div className={classes.OurServices_innerWrapper}>
        <div className={classes.headerWrapper}>
          <h1 className={classes.OurServices_header}>Our Services</h1>
        </div>
        <div className={classes.gridWrapper}>
          <div className={classes.gridBuffer}></div>
          <div className={classes.OurServices_cardWrapper}>
            <OurServicesCard
              image={
                "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
              header={"NM Cuts Boutique™"}
              link={""}
            />
            <OurServicesCard
              image={
                "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
              header={"NM Cuts Catering™"}
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
              link={""}
            />
            <OurServicesCard
              image={
                "https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              }
              header={"NM Tours Transportation™"}
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus hic, iure et sed."
              }
              link={""}
            />

            {/* <div className={classes.ourServicesCard}>
              <div
                className={classes.imgWrapper}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
                }}
              ></div>
              <div className={classes.textWrapper}></div>
            </div>
            <div className={classes.ourServicesCard}>
              <div
                className={classes.imgWrapper}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)",
                }}
              ></div>
              <div className={classes.textWrapper}></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
