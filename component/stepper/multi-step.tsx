import { useContext } from 'react';
import classes from './multi-step.module.css'
import AbroadContext from '../../service/abroad-context';

export default function MultiSteps(props:any){

    const [data,setdata] = useContext(AbroadContext);

    const index:any = 1;
    return (  <>
  <div className='hidden sm:flex  max-w-container mx-auto px-8 lg:p-[20px]'>
    <div className="flex flex-col sm:flex-row relative items-center justify-center mt-0 sm:mt-6 pb-6 gap-3 sm:gap-0 w-full">
        <div className="before:absolute before:bg-lightestGrey before:h-3/4 before:w-1 before:top-8 before:left-4 sm:before:h-1 sm:before:w-[78%] lg:before:left-0 sm:before:top-5"></div>


        <div className="flex items-baseline lg:items-start flex-row sm:flex-col z-10 relative flex-1">
            <div className="w-10 h-10 bg-lightGrey border-[5px] border-lightWhite rounded-[50px] flex items-center justify-center text-white mb-2 font-bold relative">
                1
            </div>
            <div className="hidden after:content[] after:bg-lightGrey after:absolute after:h-3/4 after:w-1 after:top-8 after:left-4 sm:after:h-1 sm:after:w-[100%] lg:after:left-0 sm:after:top-5"></div>
            <div className="flex flex-col items-start sm:items-center">
                <h3 className="uppercase xs:ml-[10px] md:ml-0 font-bold sm:text-paralarge">Destination</h3>
            </div>
        </div>

        <div className="flex items-baseline lg:items-start flex-row sm:flex-col z-10 relative flex-1">
            <div className="w-10 h-10 bg-lightestGrey border-[5px] border-lightWhite rounded-[50px] flex items-center justify-center text-black mb-2 font-bold relative">
                2
            </div>
            <div className="hidden after:content[] after:bg-lightGrey after:absolute after:h-3/4 after:w-1 after:top-8 after:left-4 sm:after:h-1 sm:after:w-[100%] lg:after:left-0 sm:after:top-5"></div>
            <div className="flex flex-col items-start sm:items-center">
                <h3 className="uppercase xs:ml-[10px] md:ml-0 font-bold sm:text-paralarge">Subject</h3>
            </div>
        </div>

        <div className="flex items-baseline lg:items-start flex-row sm:flex-col z-10 relative flex-1">
            <div className="w-10 h-10 bg-lightestGrey border-[5px] border-lightWhite rounded-[50px] flex items-center justify-center text-black mb-2 font-bold relative">
                3
            </div>
            <div className="hidden after:content[] after:bg-lightGrey after:absolute after:h-3/4 after:w-1 after:top-8 after:left-4 sm:after:h-1 sm:after:w-[100%] lg:after:left-0 sm:after:top-5"></div>
            <div className="flex flex-col items-start sm:items-center">
                <h3 className="uppercase xs:ml-[10px] md:ml-0 font-bold sm:text-paralarge">Study Level</h3>
            </div>
        </div>

        <div className="flex items-baseline lg:items-start flex-row sm:flex-col z-10 relative flex-1">
            <div className="w-10 h-10 bg-lightestGrey border-[5px] border-lightWhite rounded-[50px] flex items-center justify-center text-black mb-2 font-bold relative">
                4
            </div>
            <div className="hidden after:content[] after:bg-lightGrey after:absolute after:h-3/4 after:w-1 after:top-8 after:left-4 sm:after:h-1 sm:after:w-[100%] lg:after:left-0 sm:after:top-5"></div>
            <div className="flex flex-col items-start sm:items-center">
                <h3 className="uppercase xs:ml-[10px] md:ml-0 font-bold sm:text-paralarge">What's Next</h3>
            </div>
        </div>
    </div>
</div>


   
    </>
    )}