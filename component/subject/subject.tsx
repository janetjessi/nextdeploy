import { useContext, useEffect, useRef, useState } from 'react'
import classes from './subject.module.css'
import AbroadContext from '../../service/abroad-context';
import CarouselComp from '../carousel/carousel';
import ContentRecommandationCarousel from '../content-recommandation/content-carousel';
import Typewriter from '../type-writer/typewriter';
import ValidationErrorMsg from '../validation-errormsg/validation-errormsg';
import { getSubjects } from '../lib/data';
import { icons } from '@/utils/svg';
import useSWR from 'swr';


export default function Subject(props:any){ 

    const [show,setshow] = useState(false);
    const dropdownRef:any = useRef(null);

    const [storedata,setdata] = useContext(AbroadContext);

    //const optionValue:any[] = getSubjects();

    // const [options, setOptions] = useState(optionValue);
    // const [filterOptions,setfilteroptions] = useState(optionValue);

     const [options, setOptions] = useState<any[]>([]);
    const [filterOptions,setfilteroptions] = useState<any[]>([]);

    const apiUrl = 'https://api.hci.dev.idp.com/hci/v1/guest/subjects/fetchDetails';
    const apiKey = 'idiWdeCLHp69KazoMycfP3U2Ioy7iQltaFUBkY1m';

    const fetcher:any = async (url: string, apiKey: string): Promise<any> => {
      console.log(apiKey,'apiKey123');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-api-key': 'idiWdeCLHp69KazoMycfP3U2Ioy7iQltaFUBkY1m',
        },
      });
  
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
  
      // Check if the data is an array
      if (Array.isArray(data)) {
        // Add custom field to each element in the array
        data.forEach(item => {
          item.checked = false;
        });

        if(storedata.stepAction === 1){
          console.log(data,storedata.stepAction ,'stepAction');
          setOptions(data);
          setfilteroptions(data);
        }
      //  
        

      }
    
      return {
        data
      };
    };

    

    const { data, error, isLoading } = useSWR<[string, string]>(
      apiUrl,
      (url) => fetcher(url, apiKey),
      { shouldRetryOnError: false,
        revalidateOnFocus: false, // Disable revalidation on focus
       }
    );
    
    
    
    console.log(data,'dataswr');
   


      const handleCheckboxChange = (id:any) => {
      
        setOptions(
          options?.map((option) =>
            option.L2_CATEGORY_CODE === id ? { ...option, checked: !option.checked } : option
          )
        );

        setfilteroptions(
          filterOptions?.map((option) =>
            option.L2_CATEGORY_CODE === id ? { ...option, checked: !option.checked } : option
          )
        );
        
        //console.log(options,'options123')
        const values = {...storedata};
        values.subjects = options?.map((option) =>
          option.L2_CATEGORY_CODE === id ? { ...option, checked: !option.checked } : option
        ).filter(f=> f.checked);
        setdata(values);


      };

    const setSelectedValue = () => {
      //const list = options ? [...options] : [];
      const valList:any = data;
      const list:any = valList?.data;
      console.log(list,'list123');
       const selectedOpt = storedata.subjects.map((item:any) =>
        item.L2_CATEGORY_CODE
    );
    console.log(selectedOpt,'selectedOpt');
        list.forEach((f:any)=>{
          if(selectedOpt.some((id:any) => id == f.L2_CATEGORY_CODE)){
            console.log(f.L2_CATEGORY_CODE,'code');
            f.checked = true;
            //console.log( f.check,'fff');
          }else{
            f.checked = false;
          }
        })
        setOptions(list);
        setfilteroptions(list);
        console.log(options,'checkboxData12');
    }


    const clearSelectedSubjectFromStore = () =>{
         const storeValue = {...storedata};
         storeValue.subjects = [];
         setdata(storeValue);
    }
    

    useEffect(() => {
         
      console.log('useEffect123');
      if(storedata.stepAction === 0){
        setSelectedValue();
      }else{
        clearSelectedSubjectFromStore();
      }
       

        const handleClickOutside = (event:any) => {
          if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
            setshow(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const myFunction = () =>{
        //document.getElementById("myDropdown").classList.toggle("show");
        setshow(true);
    }

    const handleSearch = (e:any) => {
      const text = e.target.value;
      //setSearchText(text);
      console.log(text,'text');
      if(text.length >=3){
        const filtered = options.filter(option =>
          option.L2_CATEGORY_NAME.toLowerCase().includes(text.toLowerCase())
        );
        setfilteroptions(filtered);
      }else{
       // console.log(optionValue,'options12');
        //setOptions(optionValue);
        setSelectedValue();
      }
      
    };

    const clearError = () => {
      const contextvalue = {...storedata};
      contextvalue.error = '';
      setdata(contextvalue);
    }

    const clearSelectedValue = (id:any) =>{
       // const id = selectedValues[index]
       // const value = options.filter(f => f.checked)[index];
      //  console.log(value,'valueindex');
        handleCheckboxChange(id);
    }

    const renderRows = () => {
        const rows = [];
      //  const selectedValues = options.filter(f => f.checked).map((option) => option.value);
      const selectedValues = options.filter(f => f.checked);
      console.log(selectedValues,'selectedValues123');
        for (let i = 0; i < selectedValues.length; i += 3) {
          if(i < 9){
          rows.push(
            <div className='flex flex-wrap gap-[8px] mb-[5px] mt-[12px]' key={i}>
              {selectedValues.slice(i, i + 3).map((value, index) => (
                <div className=''key={index}>
                  
                    <button className={`${'flex flex-wrap w-max font-bold gap-2 rounded-[50px] items-center p-2 bg-black text-white text-[18px]'}`} onClick={() =>clearSelectedValue(value.L2_CATEGORY_CODE)} >
                  {value.L2_CATEGORY_NAME} <span><svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                          fill="currentColor"
                        />
                      </svg>
                      </span>
                      </button>
                </div>
              ))}
            </div>
          );
        }
        }
        return rows;
      };

    return (
        <>
        <div className={`${'relative'} ${storedata.stepAction ===1 ? '': classes['slide-right']}`}>
    <div className="w-full px-3 lg:px-0 max-w-container mx-auto py-4">
    
    <div className='text-heading2 font-bold pb-2'> 
    {storedata.stepAction ===1 && (<h2 className={ storedata.isShowAnswer ? '' : classes.space_bottom}>  <Typewriter text= "What would you like to study ?"/></h2>)}
    {storedata.stepAction ===0 && (<h2>What would you like to study ? </h2>)}
    </div>
    {storedata.isShowAnswer && ( <div className='text-paralarge flex flex-col lg:flex-row pt-2 items-start lg:items-center mb-[10px]'>Choose one or more
      { storedata.error &&  <span className='ml-[10px]'><ValidationErrorMsg msg={storedata.error} onClick={clearError}></ValidationErrorMsg></span> }
    </div>) }
           
   {storedata.isShowAnswer && ( <div className={classes.dropdown}>
    <div onClick={myFunction} className='flex justify-between bg-lightGrey text-slate-50 p-2 lg:w-[450px]' >Pick a Subject <span>{ icons.chevronDown(`w-[30px] h-[30px] ${show ? 'transform rotate-180' : ''}`)}</span></div>
            {show && (
              <>
              <div ref={dropdownRef} className='bg-white lg:w-[450px] p-3'>
                <input className="p-2 w-full border border-black" type="text" placeholder="Search.." onChange={handleSearch}/>
                <div className='h-[200px] overflow-y-scroll relative custom-scrollbar'>
                  {/* {isLoading ? 'loading....':''} */}
                 {filterOptions.map((option, index) => (
        <div key={index} className={classes.dropdown_options}>
          {index === 0 || options[index - 1].L1_CATEGORY_NAME !== option.L1_CATEGORY_NAME ? (
            <h3 className='pt-2 pb-2 text-xl font-bold'>{option.L1_CATEGORY_NAME}</h3>
          ) : null}
         <div className="childSubjects flex gap-2 general_radio mb-2 mt-2 w-full">
                  <input type="checkbox" id={`categoryChildLevel_M${index}`}  className="categoryChildLevel" value={option.L2_CATEGORY_NAME}  checked={option.checked} onChange={() => handleCheckboxChange(option.L2_CATEGORY_CODE)} />
                  <label htmlFor={`categoryChildLevel_M${index}`}> {option.L2_CATEGORY_NAME}</label>
                </div>
        </div>
      ))}

                 </div> 
              </div> 
              <div className='w-full lg:w-[450px] bg-slate-950 bottom-0 p-4 flex justify-between items-center h-[60px] '>
                  <p className="text-white">{options.filter(f => f.checked)?.length} Selected</p>
                  {/* <a href="javascript:void(0);" id="applySelSubjectsForFilter" className="bg-white text-black rounded-full px-[12px] py-[8px] w-16 font-bold">Apply</a> */}
              </div>
              </>
               )}
  {/* <button onClick={myFunction} className={classes.dropbtn}>Pick a Subject 
  </button>
  <div ref={dropdownRef} id={classes.myDropdown} className={`${classes['dropdown-content']} ${show? classes.show : classes.hide}`}>
    <input type="text" placeholder="Search.." id={classes.myInput} className={classes.input} onChange={handleSearch} />
     {filterOptions.map((option, index) => (
        <div key={index} className={classes.dropdown_options}>
          {index === 0 || options[index - 1].group !== option.group ? (
            <div className={classes['group-title']}>{option.group}</div>
          ) : null}
          <label className={classes['label_chk']}>
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              onChange={() => handleCheckboxChange(option.id)}
            />
            {option.value}
          </label>
        </div>
      ))}
  </div> */}
 
  <div className="selected-values">{renderRows()}</div>
  {options.filter(f => f.checked)?.length  > 9 && 
  ( <div className={classes.otherN}> + {options.filter(f => f.checked)?.length - 9} others</div>) }

</div> )}
   
    
{/* <div className="grid grid-cols-2 gap-4"> */}

{/* <div>
<div className={classes.selection_text}> <h2>Course Might Like</h2> </div>
<div className={classes.sub_title}> Shorlisted your recommendation Courses</div>
<CarouselComp></CarouselComp>
</div> */}

{/* <div>
<div className={`${classes.selection_text} ${classes.sub_title}` }> <h2>You might be interested to learn</h2> </div>
< ContentRecommandationCarousel></ContentRecommandationCarousel>
</div> */}

</div>
</div>
        </>
    )
}