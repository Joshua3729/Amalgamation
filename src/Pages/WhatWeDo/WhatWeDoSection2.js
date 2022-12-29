import React from 'react';
import Cards from '../WhatWeDo/Components/Card/Cards';
import CardItem from '../WhatWeDo/Components/Card/CardItem';
import classes from "./WhatWeDo.module.css";


const WhatWeDoSection2 = () => {
  return (
    <>
      <div className={classes.section2_Cards}>
      <Cards details={CardItem} />
      
      </div>
    </>
  );
}

export default WhatWeDoSection2;
