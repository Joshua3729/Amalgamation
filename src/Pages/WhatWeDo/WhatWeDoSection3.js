import Cards from "../WhatWeDo/Components/Card/Cards";
import classes from "./WhatWeDo.module.css";
import catering from "../../Assets/Images/catering.jpg";
import beutique from "../../Assets/Images/Clothing.jpg";
import transport from "../../Assets/Images/transport.webp";
import furniture from "../../Assets/Images/couch2.jpg";
import PageBanner from "../WhatWeDo/Components/SVGComponent/PageBanner"
// import BannerTextAnimation from "../WhatWeDo/Components/BannerTextAnimation/BannerTextAnimation"
const WhatWeDoSection3 = () => {
  return (
    <>
     <PageBanner />
    <h1 className={classes.title}>What We Do?</h1>
      <div className={classes.mainContainerSection3a}>
      <PageBanner />
        <div className={classes.imageContainera}>
          <img src={catering} alt="cars" className={classes.firstImagea} />
        </div>
        <div className={classes.section3Diva}>
          <p className={classes.titleSection3}>NM Cuts Catering</p>
          <p className={classes.descriptionSection3a}>
            We provide top quality catering services at affordable prices and
            incredible food that will have your guests talking. Our food is our
            business Each client is uniquely important to us. We work closely
            with our customers to ensure every detail is correct. Our aim is to
            deliver customer satisfaction through high quality food, and top
            class service, at competitive and affordable prices We will create
            the event you have dreamed about for your special day.
           
          </p>
        </div>
      </div>
      <div className={classes.mainContainerSection3b}>
      <div className={classes.section3Divb}>
          <p className={classes.titleSection3}>NM Cuts Beautique</p>
          <p className={classes.descriptionSection3b}>
            We provide top quality catering services at affordable prices and
            incredible food that will have your guests talking. Our food is our
            business Each client is uniquely important to us. We work closely
            with our customers to ensure every detail is correct. Our aim is to
            deliver customer satisfaction through high quality food, and top
            class service, at competitive and affordable prices We will create
            the event you have dreamed about for your special day.
           
          </p>
        </div>
        <div className={classes.imageContainerb}>
          <img src={beutique } alt="cars" className={classes.firstImageb} />
        </div>
      </div>
      <div className={classes.mainContainerSection3a}>
        <div className={classes.imageContainera}>
          <img src={furniture} alt="cars" className={classes.firstImagea} />
        </div>
        <div className={classes.section3Diva}>
          <p className={classes.titleSection3}>NM Cuts Furniture</p>
          <p className={classes.descriptionSection3a}>
            We provide top quality catering services at affordable prices and
            incredible food that will have your guests talking. Our food is our
            business Each client is uniquely important to us. We work closely
            with our customers to ensure every detail is correct. Our aim is to
            deliver customer satisfaction through high quality food, and top
            class service, at competitive and affordable prices We will create
            the event you have dreamed about for your special day.
           
          </p>
        </div>
      </div>
      <div className={classes.mainContainerSection3b}>
      <div className={classes.section3Divb}>
          <p className={classes.titleSection3}>NM Tours Transport</p>
          <p className={classes.descriptionSection3b}>
            We provide top quality catering services at affordable prices and
            incredible food that will have your guests talking. Our food is our
            business Each client is uniquely important to us. We work closely
            with our customers to ensure every detail is correct. Our aim is to
            deliver customer satisfaction through high quality food, and top
            class service, at competitive and affordable prices We will create
            the event you have dreamed about for your special day.
           
          </p>
        </div>
        <div className={classes.imageContainerb}>
          <img src={transport } alt="cars" className={classes.firstImageb} />
        </div>
      </div>
 
    </>
  );
};

export default WhatWeDoSection3;
