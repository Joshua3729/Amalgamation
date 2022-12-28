import classes from "./Hero.module.css";
import model from "../../Assets/Images/model.png";
import { PRIMARY_COLOR } from "../../Constants/Colors";
import SlideShow from "../SlideShow/SlideShow";
import { useState } from "react";
import butcher from "../../Assets/Images/butcher.png";
import driver from "../../Assets/Images/driver.png";

const Hero = (props) => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className={classes.buffer}></div>
      <div className={classes.Hero}>
        <SlideShow
          images={[
            {
              img: "https://images.unsplash.com/photo-1586363129094-d7a38564fae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              modelImg: model,
              header:
                "Upgrade your wardrobe with <span>NM Cuts Boutique</span> this summer",
              description:
                "With our all encompassing clothing range we've got you covered",
            },
            {
              img: "https://images.unsplash.com/photo-1603048374877-b98f840ad441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
              modelImg: butcher,
              header:
                "Get served meats That Melt Through the Fork. With <span>NM Cuts Butchery</span>",
              description:
                "With our daily fresh cuts. We've got all your meet needs covered.",
            },
            {
              img: "https://images.unsplash.com/photo-1551432615-469d73f41b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
              modelImg: driver,
              header:
                "Get to your destination faster and safer. With <span>NM Tours Transportation</span>",
              description:
                "We have a fleet of vehicles with an army of competant drivers ready to take you wherever your heart desires.",
            },
          ]}
          tab={tab}
          setTab={setTab}
        />
      </div>
    </>
  );
};

export default Hero;
