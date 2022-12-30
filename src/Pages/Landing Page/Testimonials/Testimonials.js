import classes from "./Testimonial.module.css";
import imgFrame from "../../../Assets/Images/frame.png";
import SlideShow2 from "../../../Component/Slideshow2/SlideShow2";

const Testimonial = () => {
  return (
    <div className={classes.Testimonial}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.OurServices_header}>Testimonials</h1>
        <SlideShow2
          slidesData={[
            {
              profile:
                "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
              name: "Gayle Swayer",
              color: "rgb(35, 190, 182, 0.2)",
            },
            {
              profile:
                "https://images.unsplash.com/photo-1534351842133-0db61b907aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              name: "Anda Gcisa",
              color: "rgba(111, 173, 255,0.2)",
            },
            {
              profile:
                "https://images.unsplash.com/photo-1620794108219-aedbaded4eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              name: "Amanda Nteta",
              color: "rgba(41, 121, 204, 0.2)",
            },
            {
              profile:
                "https://images.unsplash.com/photo-1617370447481-f4691f05d6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              name: "Mary Swarts",
              color: "rgba(0, 43, 91, 0.2)",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Testimonial;
