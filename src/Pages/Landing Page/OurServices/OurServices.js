import classes from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={classes.OurServices}>
      <div className={classes.OurServices_innerWrapper}>
        <h1 className={classes.OurServices_header}>Our services</h1>
        <div className={classes.OurServices_cardWrapper}>
          <div className={classes.ourServicesCard}></div>
          <div className={classes.ourServicesCard}></div>
          <div className={classes.ourServicesCard}></div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
