import Image from "next/image";
import { Inter } from "next/font/google";
import StepperContent from "../../component/stepper-content";
import Slide from "../../component/slides/slide";
import Steps from "../../component/stepper/steps";
import Introduction from "../../component/introduction/introduction";
import { useState } from "react";
import Study from "../../component/study/study";
import { createContext } from 'react';
import AbroadContext from "../../service/abroad-context";
import Destination from "../../component/destination/destination";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Subject from "../../component/subject/subject";
import MultiSteps from "../../component/stepper/multi-step";
import classes from "./index.module.css"
import RecommandaionSection from "../../component/recommendation-section/recommendation-section";
import WhatNext from "../../component/what-next/what-next";
import {checkStepsValidations} from '../../lib/validation-error';
import VideoLightBox from "../../component/video-lightbox/video-lightbox";
import Head from 'next/head';
import { sendGTMEvent } from '@next/third-parties/google';
import Footerv2 from "../../component/Footerv2/Footerv2";
import Headerv2 from "../../component/Headerv2/Headerv2";
import PracticeFavorite from "../../component/practiceFavorite/page";
import Menu from "../../component/Menu/Menu";



const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Onboarding Journey',
//   description: 'Onboarding User Journey',
// }

export default function Home() {

  const stepsData = {
    activeTab: 0,
    destination:[],
    stepAction: 1,
    isShowAnswer: false,
    subjects:[],
    error:'',
    studyLevel:[]
  }
 

  const [activeTab, setActiveTab] = useState(0);

  const [stepsform,setstepsform] =  useState(stepsData);

  //const stepsContext = createContext(stepsData);

  
//{id : <Introduction />},

  const formElements = [   
  { id : <Destination /> },
  {id : <Subject />},
  {id : <Study />},
  {id : <WhatNext />}
]

  // handleNextStep=>{
    
  // }
  const handleNextButton = () => {
    const data = {...stepsform};
    const validation = checkStepsValidations(data);
    console.log(validation,'validation');
    if(validation){
      data.error = validation;
    } else{
    data.activeTab = data.activeTab + 1;
    data.stepAction = 1;
    data.isShowAnswer = false;
    data.error = '';
    }
    console.log(data,'stepsform23');
    window.scrollTo(0, 0)
    setstepsform(data);
    handleButtonClick();
  }

  const handlePrevButton = () => {
    const data = {...stepsform};
    data.activeTab = data.activeTab - 1;
    data.stepAction = 0;
    data.isShowAnswer = true;
    data.error = '';
    window.scrollTo(0, 0)
    setstepsform(data);
    console.log(stepsform,'stepsform-prev');
  }

  const handleButtonClick = () => {
    sendGTMEvent({
      event: 'button_clicked', // Your event name
      category: 'User Interaction', // Optional category
      label: 'Click on Next Button', // Optional label
    });
  }
 



  return (
    <>
    <div>
    <Head> 
      <title>Onboarding Journey</title>
    </Head> 
    <Headerv2/>

   <AbroadContext.Provider value={[stepsform,setstepsform]}> 
    { stepsform.activeTab >= 0 &&  <MultiSteps></MultiSteps>}
 
<div className="w-full max-w-container mx-auto py-4">

<h1 className="text-heading1
 px-3 lg:px-0 font-bold pb-[20px]"> Get your personalized recommandations </h1> 
{formElements[stepsform.activeTab].id } 
<div className='relative w-full h-[50px]'>
 
 {stepsform.activeTab > 0 &&  (<button className='flex items-center absolute left-0 top-[50%] translate-y-[-50%] text-[18px] h-[40px] cursor-pointer text-black hover:bg-black hover:text-white p-3 rounded-xl hover:transition-all' onClick={handlePrevButton}>
<svg className={`w-3.5 h-3.5 me-2 rtl:rotate-180 ${classes.svg}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
</svg>
Previous
</button>
)}
 
 
{stepsform.activeTab >= 0 && stepsform.activeTab != 3   &&  (<button className="flex items-center absolute right-0 top-[50%] translate-y-[-50%] text-[18px] h-[40px] cursor-pointer text-black hover:bg-black hover:text-white p-3 rounded-xl hover:transition-all" onClick={handleNextButton}>
Next
<svg className={`w-3.5 h-3.5 ms-2 rtl:rotate-180 ${classes.svg}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
)}
 
</div>
</div>

<div>
  <RecommandaionSection></RecommandaionSection>
</div>

</AbroadContext.Provider>


<Footerv2/>


    </div>
    </>
  );
}
function handleNextStep() {
  throw new Error("Function not implemented.");
}

