import classes from './stepper-content.module.css'

export default function StepperContent(props:any){
    return (
        <>

<div  className={classes.step}>
   <div>
      <div className={classes.circle}><i className="fa fa-check"></i></div>
   </div>
   <div>
      <div className={classes.title}>First Step</div>
      <div className={classes.caption}>Optional</div>
   </div> 
</div>
<div className={ `${classes.step} `}>
   <div>
      <div className={classes.circle}>2</div>
   </div>
   <div>
      <div className={classes.title}>Second Step</div>
      <div className={classes.caption}>This is description of second step.</div>
   </div>
</div>
<div className={classes.step}>
   <div>
      <div className={classes.circle}>3</div>
   </div>
   <div>
      <div className={classes.title}>Third Step</div>
      <div className={classes.caption}>Some text about Third step. </div>
   </div>
</div>
<div className={classes.step}>
   <div>
      <div className={classes.circle}>4</div>
   </div>
   <div>
      <div className={classes.title}>Finish</div>
   </div>
</div>

       
</>
    )
}

