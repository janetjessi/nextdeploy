import { useContext, useEffect, useState } from 'react';
import classes from './study.module.css'
import CourseMightLike from '../course-might-like/course-might-like';
import stepsContext from './../../src/pages/index'
import AbroadContext from '../../service/abroad-context';
import CarouselComp from '../carousel/carousel';
import ContentRecommandationCarousel from '../content-recommandation/content-carousel';
import Typewriter from '../type-writer/typewriter';
import ValidationErrorMsg from '../validation-errormsg/validation-errormsg';
//import  from './

export default function Study(props:any){

    if (typeof window !== 'undefined') {
        sessionStorage.setItem('screen-name','destination')
       console.log(sessionStorage.getItem('screen-name'))
      }
  
    // const [checkboxes, setCheckboxes] = useState({
    //     checkbox1: false,
    //     checkbox2: false,
    //     checkbox3: false,
    //     checkbox4:false,
    //   });

      const [data,setdata] = useContext(AbroadContext);


      const [checkboxData,setcheckboxData] =  useState([
        {id:'study1', label: 'Postgraduate', check: false },
        { id:'study2', label: 'Undergraduate', check: false },
        { id:'study3', label: 'Doctorate', check: false },
        { id:'study4', label: 'Carrer based vocasional', check: false },
      ]);

      useEffect(() => {
        if(data.stepAction === 0){
        const list = [...checkboxData];
       const selectedOpt = data.studyLevel.map((item:any) =>item.id);
       console.log(selectedOpt,'selectedOpt');
        list.forEach(f=>{
          if(selectedOpt?.includes(f.id)){
            f.check = true;
          }
        })
        setcheckboxData(list);
        console.log(checkboxData,'checkboxData12');
      }else {
        clearSelectedSubjectFromStore();
      }
        
      }, []);

      const clearSelectedSubjectFromStore = () =>{
        const storeValue = {...data};
        storeValue.studyLevel = [];
        setdata(storeValue);
   }

      const handleCheckboxChange = (event:any) => {
        const { name, checked } = event.target;
       const contextvalue = {...data};
       //const selectedvalue = checkboxData.filter(f=>f.id === name)[0];

      //  if(checked){
      //   contextvalue.destination.push(selectedvalue);
      //  }else{
      //  // delete contextvalue.destination[selectedvalue];
      //  contextvalue.destination =  contextvalue.destination.reduce((acc:any, item:any) => {
      //       if (item.id !== selectedvalue.id ) {
      //         acc.push(item); // Add item to the new array
      //       }
      //       return acc;
      //     }, []);
      //  }
      
       

        setcheckboxData((prevCheckboxData) =>
              prevCheckboxData.map((item) =>
                item.id === name ? { ...item, check: checked } : item
              )
         );

         contextvalue.studyLevel = checkboxData.map((item) =>
          item.id === name ? { ...item, check: checked } : item).filter(f=>f.check);
      
         setdata(contextvalue);
        //setcheckboxData([...checkboxData,checkboxData])
      };

      const clearError = () => {
        const contextvalue = {...data};
        contextvalue.error = '';
        setdata(contextvalue);
      }

    return (
        <>
        {/* <!-- Card body --> */}
        <div className={`${classes.study_home_banner} ${data.stepAction ===1 ? '': classes['slide-right']}`}>
   <div className='w-full max-w-container mx-auto px-3 '>
   <div className='text-heading2 mb-4 font-bold'>
   <div className='py-2'>
   {data.stepAction ===1 && (<h2 className={ data.isShowAnswer ? '' : classes.space_bottom}>  <Typewriter text= "What level do you want to achieve ?"/></h2>)}
   {data.stepAction ===0 && (<h2> What level do you want to achieve ?</h2>)}
    </div>
    <div> 
    {data.isShowAnswer && ( <div className='text-paralarge flex items-center'>Choose one or more</div>) }
    { data.error &&  <span><ValidationErrorMsg msg={data.error} onClick={clearError}></ValidationErrorMsg></span> }</div>
    
    {data.isShowAnswer && ( <div className='w-full flex flex-nowrap lg:flex-wrap gap-2.5 justify-start overflow-x-scroll lg:overflow-hidden lg:py-4 lg:items-center lg:justify-start max-w-container mx-auto py-8'>
    {checkboxData.map((item,index) => (
   
    <div className='flex gap-x-4 gap-y-8 flex-wrap'>
          <input type="checkbox" id={`choose-me${index}`} name={item.id} className="regular-checkbox font_size_checkbox hidden" checked={item.check} onChange={handleCheckboxChange} />
          <label htmlFor={`choose-me${index}`} className={`${item.check? 'justify-center bg-gray-400 text-white p-[10px] rounded-[50px] w-max lg:w-[250px] text-center' : 'justify-center bg-lightGrey text-white p-[10px] rounded-[50px] w-max lg:w-[250px] text-center text-[18px]' }`}> {item.label} </label>
    </div>
      ))}
     
    </div> )}
</div>
 
</div>
</div>
   {/* <div className={`${classes.study_home_banner} ${data.stepAction ===1 ? '': classes['slide-right']}`}>
   <div className={classes.study_width_home}>
   <div className={classes.study_left_banner}>
   <div className={classes.banner_content_title}> 
   {data.stepAction ===1 && (<h2 className={ data.isShowAnswer ? '' : classes.space_bottom}>  <Typewriter text= "What level do you want to achieve ?"/></h2>)}
   {data.stepAction ===0 && (<h2> What level do you want to achieve ?</h2>)}
    </div>
    {data.isShowAnswer && ( <div className={classes.selection_text}>Choose one or more
      { data.error &&  <span><ValidationErrorMsg msg={data.error} onClick={clearError}></ValidationErrorMsg></span> }
    </div>) }

    {data.isShowAnswer && ( <div className={classes.grid}>
    {checkboxData.map((item,index) => (
         <div className={classes.study_getstarted}>
 <input type="checkbox" id={`choose-me${index}`} name={item.id} className="peer hidden" checked={item.check} onChange={handleCheckboxChange} />
 <label htmlFor={`choose-me${index}`} className={`${item.check?classes.check_box_select : classes.check_box_unselect }`}> {item.label} </label>
 </div>
      ))}
     
    </div> )}
</div>
</div>
</div> */}
        </>
    )
}


