import classes from './Subject.module.css';
import img7 from "../../Assets/Images/Clothing.jpg";
// import CardItem from '../../Pages/WhatWeDo/Components/Card/CardItem';
const Subject = (props) => {
  return (
    <>
      <div className={classes.SubjectComponent}>
        <div className={classes.question}>{props.Subject} </div>
        <div className={classes.smallText}>
        <h4>NM amalgeted|<b>Group PTY LTD</b></h4>
          <div className={classes.flexDiv}>
       
          <div className={classes.text} >
            <h3>Here's what we have to offer ...</h3>
     <span><p><b>&#10003;</b> NM cuts  Transport Transport Catering</p></span>
     <span><p><b>&#10003;</b> NM cuts  Transport Transport Furniture</p></span>
 	
   <p><b>&#10003;</b> NM cuts  Transport  TransportBeautique</p> 
     <p><b>&#10003;</b> NM cuts  Transport  TransportTransport</p>  	
    <button>I'm ready to explore</button>
         </div>
          <div className={classes.image}>
            <img src={img7} alt="image"    />
          </div>
          </div>
          </div>
      </div>
    </>
  );
}

export default Subject