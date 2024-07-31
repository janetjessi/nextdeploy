import { useContext, useEffect, useState } from 'react';
import classes from './destination.module.css'
import CourseMightLike from '../course-might-like/course-might-like';
import stepsContext from './../../src/pages/index'
import AbroadContext from '../../service/abroad-context';
import CarouselComp from '../carousel/carousel';
import ContentRecommandationCarousel from '../content-recommandation/content-carousel';
import Typewriter from '../type-writer/typewriter';
import ValidationErrorMsg from '../validation-errormsg/validation-errormsg';
import { icons } from '../../src/utils/svg.js';

//import  from './

export default function Destination(props:any){

  const [displayText, setDisplayText] = useState('');

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

    // const optionList:any[] = [ {id:'destination1', label: 'Australia', check: false },
    // { id:'destination2', label: 'UK', check: false },
    // { id:'destination3', label: 'Canada', check: false },
    // { id:'destination4', label: 'USA', check: false },
    // { id:'destination5', label: 'New Zealand', check: false },
    // { id:'destination6', label: 'Ireland', check: false },
    // { id:'destination7', label: 'Not decided', check: false }];

    const [checkboxData,setcheckboxData] =  useState([ {id:'destination1', label: 'Australia', check: false },
    { id:'destination2', label: 'UK', check: false },
    { id:'destination3', label: 'Canada', check: false },
    { id:'destination4', label: 'USA', check: false },
    { id:'destination5', label: 'New Zealand', check: false },
    { id:'destination6', label: 'Ireland', check: false },
    { id:'destination7', label: 'Not decided', check: false }]);

      const [data,setdata] = useContext(AbroadContext);

      useEffect(() => {
     
        const list = [...checkboxData];
        console.log(list,'sss');
        console.log(data,'data');
       const selectedOpt = data.destination.map((item:any) =>
        item.label
    );
    console.log(selectedOpt,'selectedOpt');
        list.forEach(f=>{
          if(selectedOpt?.includes(f.label)){
            f.check = true;
            console.log( f.check,'fff');
          }
        })
        setcheckboxData(list);
        console.log(checkboxData,'checkboxData12');
        
      }, []);



     

      const handleCheckboxChange = (event:any) => {
        const { name, checked } = event.target;
       const contextvalue = {...data};
       const selectedvalue = checkboxData.filter(f=>f.id === name)[0];
       if(checked){
        contextvalue.destination.push(selectedvalue);
       }else{
       // delete contextvalue.destination[selectedvalue];
       contextvalue.destination =  contextvalue.destination.reduce((acc:any, item:any) => {
            if (item.id !== selectedvalue.id ) {
              acc.push(item); // Add item to the new array
            }
            return acc;
          }, []);
       }
      
       setdata(contextvalue);

        setcheckboxData((prevCheckboxData) =>
    prevCheckboxData.map((item) =>
      item.id === name ? { ...item, check: checked } : item
    )
  );
      
        //setcheckboxData([...checkboxData,checkboxData])
      };

      const clearError = () => {
        const contextvalue = {...data};
        contextvalue.error = '';
        setdata(contextvalue);
      }

    return (
        <>
          <div className={`${classes.destination_home_banner} ${data.stepAction ===1 ? "": classes['slide-right']}`}>
    <div className=' px-3 lg:px-0 max-w-container mx-auto '>
    <div className='text-heading2 mb-0 font-bold'>
    {data.stepAction ===1 && (<h2 className={`${ data.isShowAnswer ? '' : classes.space_bottom}`}>  <Typewriter text= "Where would you love to study ?"/></h2>)}
    {/* <h2>{displayText}</h2> */}
    <div className='py-0'>
      {data.stepAction ===0 && (<h2 className='text-heading2 font-bold pb-2'>Where would you love to study ? </h2>)}
      </div>
      {data.isShowAnswer && ( <div className="text-paralarge flex flex-col lg:flex-row pt-2 items-start lg:items-center">Choose one or more
      { data.error && (<span className="bg-red-500 flex items-center text-white p-2 rounded text-base z-10 lg:ml-[10px]">{ icons.infoOutline('w-[30px] wh-[30px]') }{data.error}</span>) }
      </div> ) }
    </div>
   {data.isShowAnswer && ( <div className="w-full flex flex-nowrap overflow-x-scroll lg:overflow-hidden gap-2.5 max-w-container mx-auto lg:py-4">
    {checkboxData.map((item,index) => (
  <div className="flex gap-x-4 gap-y-8 flex-wrap">      
      <input type="checkbox" id={`choose-me${index}`} name={item.id} className="regular-checkbox hidden" checked={item.check} onChange={handleCheckboxChange} />
      <label htmlFor={`choose-me${index}`} className={`${item.check? 'justify-center bg-gray-400 text-white p-[10px] rounded-[50px] w-[150px] text-center' : 'justify-center bg-lightGrey text-white p-[10px] rounded-[50px] w-[150px] text-center hover:bg-black transition ease-in-out delay-150 duration-300' }`}> {item.label} </label>
 {/* ${classes.selectbox} ${item.check?classes.selectedBox : '' } */}
 </div>
      ))}
     
    </div>)}
</div>
</div>



        {/* <!-- Card body --> */}
{/* <div className={`${classes.destination_home_banner} ${data.stepAction ===1 ? "": classes['slide-right']}`}>
    <div className={classes.destination_width_home}>
    <div className={classes.destination_left_banner}>
    <div className={classes.banner_content_title}> 
    {data.stepAction ===1 && (<h2 className={ data.isShowAnswer ? '' : classes.space_bottom}>  <Typewriter text= "Where would you love to study ?"/></h2>)}
    {data.stepAction ===0 && (<h2>Where would you love to study ? </h2>)}
    </div>
    {data.isShowAnswer && ( <div className={classes.selection_text}>Choose one or more 
    { data.error &&  <span><ValidationErrorMsg msg={data.error} onClick={clearError}></ValidationErrorMsg></span> }
    </div> ) }

    
   {data.isShowAnswer && ( <div className={classes.grid}>
    {checkboxData.map((item,index) => (
        <div className={classes.destination_getstarted}>
 <input type="checkbox" id={`choose-me${index}`} name={item.id} className="peer hidden" checked={item.check} onChange={handleCheckboxChange} />
 <label htmlFor={`choose-me${index}`} className={`${item.check?classes.check_box_select : classes.check_box_unselect }`}> {item.label} </label>
 </div>
      ))}
     
    </div>)}
    </div>

</div>
</div> */}
        </>
    )
}