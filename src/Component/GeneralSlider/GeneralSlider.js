import classes from './GeneralSlider.module.css'
import React from 'react'

const GeneralSlider = (props) => {
    const slideItems = props.slideItems;
    console.log(slideItems)
  return (
      <div className={classes.GeneralSlider}>
          {
              slideItems.map((slideItem, index) => {
                  return <div className={classes.item}>{slideItem}</div>;
                  })
          }
    </div>
  )
}

export default GeneralSlider;