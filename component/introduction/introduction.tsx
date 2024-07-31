import { useContext } from 'react';
import classes from './introduction.module.css';
import Image from 'next/image';
import AbroadContext from '../../service/abroad-context';

export default function Introduction(props:any){

  const [data,setdata] = useContext(AbroadContext);

  const handleNextButton = () => {
    const dataVal = {...data};
    dataVal.activeTab = dataVal.activeTab + 1;
    console.log(dataVal,'stepsform23');
    setdata(dataVal);
    console.log(dataVal,'stepsform');
  }


    if (typeof window !== 'undefined') {
      console.log('sdsd');
        sessionStorage.setItem('screen-name','introduction');
        document.cookie = "session=introduction; domain=localhost; path=/";
      }
    return (
        <>
        <div className={`${classes.fastlane_home_banner}  ${classes.height_auto_banner}`}>
        <div className={classes.fastlane_width_home}>
           <div className={classes.homepage_left_banner}>
              
              <div className={`${classes.fastlane_banner_content} ${classes.abroad_stress}`}>
                 <h2>Let's start with a quick</h2>
                 <p>onboarding Journey</p>
                 <span>We'll have you up and running in no time</span>
              </div>
              {/* <a href="#" >Get Started</a> */}
              <div className={classes.homebanner_getstarted}><button onClick={handleNextButton}>Get Started</button></div>
           </div>
           <div className={classes.homepage_right_banner}>
              <div className={`${classes.homepage_lady} ${classes.abroad_fastlane_img}`} id="homepageLady">
                 <picture>
                
                 <Image src='https://images-intl.prod.aws.idp-connect.com/hca-cont/img/india_student_new_090224.webp' alt='hero'
    width={500}
    height={500}></Image>
                </picture>
              </div>
           </div>
        </div>
     </div>
        {/* <!-- Card body --> */}
{/*<div className="p-6">




 <div className={classes.grid}>
  
  <div className={classes.calSpan}>
  
  </div>
  <div className={classes.gridRowCol}>
  <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
  Welcome
</h5>
  <div >
    <p className={`mb-2 text-6xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50 ${classes.header}`}>Lets start with a quick</p>
    <p className={`mb-2 text-6xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50 ${classes.header}`}>onboarding journy </p>
    <h3 className={`mb-2 text-base text-neutral-500 dark:text-neutral-300 ${classes.description} `}>We'll have you up and running in no time</h3>
  </div>
    

<button className={classes.buttonBlue}>
    Get Started
</button>

  </div>
  <div className={classes.rowSpan}>
    <Image src='https://images-intl.prod.aws.idp-connect.com/hca-cont/img/india_student_new_090224.webp' alt='hero'
    width={500}
    height={500}></Image>
  </div>
</div>
</div> */}
        </>
    )
}