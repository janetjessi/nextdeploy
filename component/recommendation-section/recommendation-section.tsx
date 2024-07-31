
import CarouselComp from '../carousel/carousel'
import ContentRecommandationCarousel from '../content-recommandation/content-carousel'
import classes from './recommendation-section.module.css'

export default function RecommandaionSection(props:any){ 

    return (<>
    <div className=' max-w-container px-3 lg:px-0 mx-auto'>
            <div>
                <div className='text-heading2 mb-4 font-bold'> <h2>Recommended courses for you</h2> </div>
                <div className='text-base mb-4'> Shortlisting gives you more relevant recommendations</div>
                <CarouselComp></CarouselComp>
            </div>
            <div>    
                {/* <CourseMightLike></CourseMightLike>   */}
                <div className='text-heading2 mb-4 font-bold pt-5'> <h2>You might be interested to learn</h2> </div>
                < ContentRecommandationCarousel></ContentRecommandationCarousel>
            </div>
    </div>
    {/* <div className={`${classes.destination_home_banner}`}>
    <div className={classes.destination_width_home}>
    <div>
        <div className={classes.selection_text}> <h2>Recommended courses for you</h2> </div>
        <div className={classes.sub_title}> Shortlisting gives you more relevant recommendations</div>
        <CarouselComp></CarouselComp>
        </div>

        <div>
        <div className={`${classes.selection_text} ${classes.sub_title}` }> <h2>You might be interested to learn</h2> </div>
        < ContentRecommandationCarousel></ContentRecommandationCarousel>
        </div>
    </div>
    </div> */}
    </>)
}