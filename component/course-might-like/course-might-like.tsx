
import classes from './course-might-like.module.css'

export default function CourseMightLike(props:any){

    const index:any = 1;
    return ( <>
    {/* <div className='flex flex-row overflow-x-scroll snap-x snap-mandatory'></div> */}
    <div> <h2>Course Might Like</h2> </div>
    <div> Shorlisted your recommendation Courses</div>
    <section className={classes.card }>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
  <div className={classes['card--content']}></div>
</section>
    </>
    )
}