import classes from "./Testimonial.module.css";
import imgFrame from "../../../Assets/Images/frame.png";

const Testimonial = () => {
  return (
    <div className={classes.Testimonial}>
      <div className={classes.innerWrapper}>
        <div className={classes.TestimonialCard}>
          <div
            className={classes.imagePaneWrapper}
            style={{
              backgroundImage:
                "url(https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg)",
            }}
          >
            <img src={imgFrame} alt="" />
            {/* <img
              src=""
              alt=""
              className={classes.profile}
            /> */}
          </div>
          <div className={classes.testimonialTextWrapper}>
            <h4 className={classes.name}>Gayle Swayer</h4>
            <p className={classes.testimonialText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              culpa quod repellat laborum delectus molestias iure beatae.
              Aliquam, dicta porro possimus similique laboriosam est vel
              provident rem repudiandae, unde asperiores?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
