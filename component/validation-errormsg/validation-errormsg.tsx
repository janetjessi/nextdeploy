import classes from './validation-erroemsg.module.css'

export default function ValidationErrorMsg(props:any){ 

    return (<>
     <label>
  <div className={`${'bg-red-500 flex gap-[5px] items-center text-white p-2 rounded text-base z-10 '}  ${classes.error}`}>
    <span className={classes.alertClose} onClick={props.onClick}>X</span>
    <span className={classes.alertText}>{props.msg}
		<br className={classes.clear}/></span>
  </div>
</label>
    </>)
}