import classes from './content-carousel.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useState } from 'react';
import VideoLightBox from '../video-lightbox/video-lightbox';
import { icons } from '../../src/utils/svg.js';
 
export default function ContentRecommandationCarousel(props:any){ 
  const [isOpen, setIsOpen] = useState(false);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const toggleLightbox = () => {
         setIsOpen(!isOpen);
       };


    return (<>
       {isOpen && (<VideoLightBox onClick={toggleLightbox}></VideoLightBox>) }

     <Carousel responsive={responsive}>
     <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className='w-full h-full'/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>

            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>

<div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
            <div className='pr-[10px]'>
              <div className='flex flex-col'>
                  <div className='flex flex-col bg-white shadow-gray-400 pb-[30px] lg:basis-64 md:basis-3/6 flex-1'>
                      <div className='flex items-center justify-between p-4'>
                          <p className='line-clamp-3 overflow-hidden font-semibold'>Video Title</p>
                          { icons.hiClose('w-[30px] wh-[30px]') }
                      </div>
                      <div className='flex gap-2 pb-2 relative' onClick={toggleLightbox}>
                          <Image src={'/videoThumbnail.png'} alt="course_prov_logo" width={100} height={100} className="w-full h-full"/>
                          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <svg className="flex justify-center items-center bg-white rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M8 5v14l11-7z"></path></svg>
                          </div>
                      </div>
                      <div className='flex flex-col p-4'>
                          <h3 className='text-heading3 font-semibold flex items-center gap-2 pb-[10px]'><span>{ icons.avatar('w-[15px] h-[15px]') }</span> John Doe</h3>
                          <p className='text-sm flex items-center gap-2'><span>{ icons.globe('w-[15px] h-[15px]') }</span> Harvard University </p>
                      </div>
                  </div>
                  <div className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3'>
                      <p className='text-white'>Shortlist</p>
                  </div>
              </div>
            </div>
{/* <div className={classes.card}>
<div className='flex justify-between'>
    <div>
    <p className={classes.title}>video Title</p>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>
    </svg>
    </div>
    </div>
    <div className={classes['video-container']}>
    <Image src='https://images-intl.aws.dev.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_295278.jpg' alt='hero'
    width={300}
    height={300} unoptimized={true}></Image>
  <div className={classes['play-icon']} onClick={toggleLightbox}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </div>
</div>
    <h1>John Doe</h1> 
  <p>Harvard University</p>
  <p><button className={classes.button}>Shortlist</button></p>
</div> */}
</Carousel>
    </>)
}