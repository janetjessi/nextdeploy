import { useContext, useEffect, useRef, useState } from 'react'
import AbroadContext from '../../service/abroad-context';
import classes from './what-next.module.css'
import Typewriter from '../type-writer/typewriter';

export default function WhatNext(props:any){ 
    const [data,setdata] = useContext(AbroadContext);

 return (<>
  <div className={`${classes.destination_home_banner} ${data.stepAction ===1 ? '': classes['slide-right']}`}>
    <div className='flex overflow-x-scroll lg:overflow-hidden w-full p-[10px] lg:p-[0px]'>
    <div className="pt-[32px]">
    <div className="text-black pb-[20px] text-[45px] leading-[56px] font-bold"> 
    {data.stepAction ===1 && (<h2 className={ data.isShowAnswer ? '' : classes.space_bottom}>  <Typewriter text= "What's next?"/></h2>)}
    {/* <h2>{displayText}</h2> */}
    {data.stepAction ===0 && (<h2>What's next ?</h2>)}
    </div>
    {data.isShowAnswer && ( <div className='flex gap-[10px] overflow-x-scroll lg:overflow-hidden'>
      <button className='flex flex-col items-center p-[20px] w-[250px] bg-[#c0c0c0] hover:bg-[#808080]'> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`feather feather-heart ${classes.svg}`}>
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg> <br/>
<span className='text-[18px]'>Save my shortlists</span>
     </button>
     <button className='flex flex-col items-center p-[20px] w-[250px] bg-[#c0c0c0] hover:bg-[#808080]'> 
     <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 31.371 31.371"
	 xmlSpace="preserve" className={classes.svg}>
<g>
	<path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5
		c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348
		c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268
		l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307
		C22.416,14.762,24.26,16.877,24.26,20.34z"/>
</g>
</svg>
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={classes.svg}>
  <path d="M12 1v22M18 5v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path>
</svg> */}
<br/>
<span className='text-[18px]'>Estimate costs</span>
     </button>
     <button className='flex flex-col items-center p-[20px] w-[250px] bg-[#c0c0c0] hover:bg-[#808080]'> 
     <svg width="800px" height="800px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={classes.svg}>
<path fill="#444" d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path>
<path fill="#444" d="M8 0l-8 4 8 5 8-5-8-4z"></path>
<path fill="#444" d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path>
</svg> <br/>
<span className='text-[18px]'>Check admission eligibility</span>
     </button>
     <button className='flex flex-col items-center p-[20px] w-[250px] bg-[#c0c0c0] hover:bg-[#808080]'> 
     <svg width="800px" height="800px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={`si-glyph si-glyph-head-set ${classes.svg} `}>
    
    <title>813</title>
    
    <defs>

</defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M15.665,6.733 L15.655,6.735 L15.655,5.632 C15.655,2.566 13.054,0.071 9.857,0.071 L8.195,0.071 C4.998,0.071 2.398,2.565 2.398,5.632 L2.398,6.74 C2.373,6.74 2.348,6.732 2.322,6.732 C1.615,6.732 1.04,7.322 1.04,8.049 L1.04,10.736 C1.04,11.464 1.615,12.05 2.322,12.05 C2.384,12.05 2.447,12.039 2.507,12.031 C3.086,13.762 5.188,15.097 7.796,15.345 C8.074,15.712 8.194,15.976 9.045,15.976 C10.137,15.976 10.958,15.546 10.958,15.015 C10.958,14.485 10.137,14.054 9.045,14.054 C8.201,14.054 8.084,14.314 7.801,14.676 C5.446,14.441 3.565,13.266 3.115,11.762 C3.562,11.762 3.931,11.154 3.931,10.735 L3.931,10.613 L3.937,10.613 L3.937,5.574 C3.937,3.027 5.455,1.956 8.195,1.956 L9.857,1.956 C12.59,1.956 14,2.992 14,5.585 L14,10.625 L14.014,10.625 L14.014,10.735 C14.014,11.463 14.766,11.956 15.48,11.956 C16.194,11.956 16.958,11.463 16.958,10.735 L16.958,8.048 C16.957,7.323 16.379,6.733 15.665,6.733 L15.665,6.733 Z" fill="#434343" className="si-glyph-fill">

</path>
    </g>
</svg><br/>
<span className='text-[18px]'>Speak to a counsellor for FREE</span>
     </button>
    </div> )}
    </div>
    </div>
    </div>
 </>)

 }