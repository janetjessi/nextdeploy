import classes from './course-recommendation.module.css';
import Image from 'next/image';
import { icons } from '../../src/utils/svg.js'

export default function CourseRecommendation(props:any){


  const addShortList =(e:any) => {
    console.log(props.id,'iddd');
      props.addShortCorse(e,props.id);
  }

    return (
        <>
<div className='block md:flex pr-[10px]'>
  <div className='flex flex-col transition-all hover:scale-105'>
            <div className='flex flex-col bg-white shadow-gray-400 p-4 lg:basis-64 md:basis-3/6 pb-[30px] flex-1 '>
                <div className='flex items-center justify-between pb-4 h-[64px]' id={`re-course-${props.id}`}>
                    <p className='line-clamp-3 overflow-hidden font-semibold'>{props.courseItem?.title}</p>
                    { icons.hiClose('w-[30px] wh-[30px]') }
                </div>
               
                <div className='flex gap-2 pb-2 h-[80px]'>
                    <Image className="w-[50px] h-[50px]" src={props.courseItem?.logoUrl} alt="course_prov_logo"  width={65} height={64}/>
                    {/* <Image src={props.courseItem?.logoUrl} alt='hero' className={classes.img} unoptimized={true}  width={200} height={100} ></Image> */}
                    <p className='line-clamp-3 overflow-hidden'>{props.courseItem?.UniName}</p>
                </div>
                <div className='flex gap-2 pb-2 items-center'>
                    <Image className="w-[14px] h-[14px]" src={"/educationIcon.png"} alt="course_prov_logo" width={65} height={64}/>
                    <p className='line-clamp-3 overflow-hidden'>Bachelors Degrees</p>
                </div>
                <div className='flex gap-2 pb-2 items-center'>
                    <Image className="w-[14px] h-[14px]" src={"/calenderIcon.png"} alt="course_prov_logo" width={65} height={64}/>
                    <p className='line-clamp-3 overflow-hidden'>September 2024</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Image className="w-[14px] h-[14px]" src={"/priceIcon.png"} alt="course_prov_logo" width={65} height={64}/>
                    <p className='line-clamp-3 overflow-hidden'>£16,875.00 per year</p>
                </div>
            </div>
            <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                <p className='text-white'>Shortlist</p>
            </div>
    </div>
  </div>


{/* <div className={classes.card1} >
  <div className='flex justify-between'  >
    <div id={`re-course-${props.id}`}>
    <h1 className={classes.title}>{props.courseItem?.title} </h1>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>
    </svg>
    </div>
    </div>
    <div className="flex" >
    <picture>
              <source
                media="md"
                srcSet={props.courseItem?.logoUrl + "?w=288&h=303&q=80&fm=webp"}
              />
              <source
                media="mobile"
                srcSet={props.courseItem?.logoUrl + "?w=386&h=406&q=80&fm=webp"}
              />
      <Image src={props.courseItem?.logoUrl} alt='hero' className={classes.img} unoptimized={true}  width={200} height={100} ></Image>
      </picture>
      <p className={classes.h1}>{props.courseItem?.UniName}</p>
      </div>
  
  
  <div className="flex" >
      <picture >
        <source
          media="md"
          srcSet={"https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/stdylevl.png?w=288&h=303&q=80&fm=webp"}
        />
        <source
          media="mobile"
          srcSet={"https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/stdylevl.png?w=386&h=406&q=80&fm=webp"}
        />
      <Image src='https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/stdylevl.png'  alt='hero'width={38} height={10} className={classes.img} unoptimized={true}></Image>
      </picture>

      <p  className={classes.p}> Masters Degrees </p>
      </div>
      <div className="flex">
      <picture>
        <source
          media="md"
          srcSet={"https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/calenderdead.png?w=288&h=303&q=80&fm=webp"}
        />
        <source
          media="mobile"
          srcSet={"https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/calenderdead.png?w=386&h=406&q=80&fm=webp"}
        />
      <Image src='https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/calenderdead.png' alt='hero'width={38} height={10} className={classes.img} unoptimized={true}></Image>
      </picture>
      <p className={classes.p}> September 2024 </p>
      </div>
      <div className="flex">
      <picture>
        <source
          media="md"
          srcSet={"https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/price.png?w=288&h=303&q=80&fm=webp"}
        />
        <source
          media="mobile"
          srcSet={"https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/price.png?w=386&h=406&q=80&fm=webp"}
        />
     <Image src='https://images-intl.aws.dev.idp-connect.com/hca-cont/img/images/price.png' alt='hero'width={38} height={30} className={classes.img} unoptimized={true}></Image>
      </picture>
      
      <p className={classes.p}> £16,875.00 per year </p>
      </div>
  <p><button className={classes.button1} onClick={addShortList}>Shortlist</button></p>
</div> */}
        </>
    )
}