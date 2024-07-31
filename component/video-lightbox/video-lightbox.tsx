import { useState } from 'react';
import classes from './video-lightbox.module.css'

export default function VideoLightBox(props:any){ 

    
    

    const toggleLightbox = () => {
       // setIsOpen(!isOpen);
      };

    return (<>
         <div className={classes['lightbox-overlay']}>
          <div className={classes['lightbox-content']}>
            <div className={classes['close_button']} onClick={props.onClick}>
              &times;
            </div>
            <video id="VisaChipCardVideo" autoPlay width="600" className={classes.video} controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
    </>)
}