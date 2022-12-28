import classes from './Subject.module.css';
const Subject = (props) => {
  return (
    <>
      <div className={classes.SubjectComponent}>
        <div className={classes.question}>{props.Subject} </div>
        <p className={classes.smallText}>{props.smallText}</p>
      </div>
    </>
  );
}

export default Subject