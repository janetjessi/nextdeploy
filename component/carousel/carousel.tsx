import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseRecommendation from '../course-recommendation/course-recommendation';
import {courseRecommentationList} from '../lib/data';
import classes from  './carousel.module.css';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Image from 'next/image';

export default function CarouselComp(props:any){

    console.log(courseRecommentationList(),'test');

    const courseREList:any[] = courseRecommentationList();
    const [reCourseList,setreCourseList] = useState(courseREList);
    const dropdownRef:any = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12; // Replace with your actual number of slides

    const [shortList,setshortList] = useState([]);
    const [isShowShorlist,setisShowShorlist] = useState(false);

    let addBtn, cart:any;
    const speed = 500, curveDelay = 300,position = "fixed";

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5
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

      const short_responsive = {
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


      // useEffect(() => {
      //   cart = document.querySelector("#cart123");
      //   console.log(cart,'cart');
      // }, []);

      const handleShortList = (e:any,id:any) =>{
       
        setisShowShorlist(true);

        if(isShowShorlist){
        let btnY =
        position === "fixed"
          ? e.currentTarget.getBoundingClientRect().top
          : e.currentTarget.offsetTop,

          btnX =
          position === "fixed"
            ? e.currentTarget.getBoundingClientRect().left
            : e.currentTarget.offsetLeft;

           
        //flyingBtn = e.currentTarget.cloneNode();
        const node:any = document.getElementById("re-course-"+id);
        console.log(node,'node');
        const flyingBtn = node.cloneNode(true);
       
        console.log(e.currentTarget,'e.currentTarget');
        console.log(flyingBtn,'btnY');
        console.log(btnX,'btnX');
        console.log(position,'btnX');

        flyingBtn.classList.add(classes.flyingBtn);
        flyingBtn.style.position = position;
        flyingBtn.style.top = `${btnY}px`;
        flyingBtn.style.left = `${btnX}px`;
        flyingBtn.style.opacity = "1";
        flyingBtn.style.transition = `all ${speed / 1000}s ease, top ${(speed +
          curveDelay) /
          1000}s ease, left ${speed / 1000}s ease, transform ${speed /
          1000}s ease ${(speed - 10) / 1000}s`;
      
        document.body.appendChild(flyingBtn);

        //cart = document.querySelector("#cart123");
        const container:any = document.getElementById("cart123");
        console.log(cart,'cart');

        cart =  container.getBoundingClientRect();

       

        console.log(`${cart.offsetTop + cart.offsetHeight - 16}px`,'btnYtop');
        console.log(`${cart.offsetLeft + cart.offsetWidth - 16}px`,'btnXleft');
        flyingBtn.style.top = `${cart.top + cart.height - 16}px`;
        console.log( flyingBtn.style.top,' flyingBtn.style.top');
        flyingBtn.style.left = `${cart.left + cart.width - 16}px`;
        // flyingBtn.style.top = `200px`;
        // flyingBtn.style.left = `100px`;
        flyingBtn.style.height = "1rem";
        flyingBtn.style.width = "1rem";
        flyingBtn.style.transform = "scale(0)";
        // flyingBtn.remove();
        setTimeout(() => {
          flyingBtn.remove();
          //storeItems();
          addShortlistCourse(id);
        }, speed * 1.5);

      }else{
        addShortlistCourse(id);
      }
    }

    const addShortlistCourse = (id:any) => {
      //if(shortList.length <= 5){
      const list:any = [...shortList];
      const selectedList = courseREList[id];
      console.log(selectedList,'selectedList');
      list.push(selectedList);
      setshortList(list);
     // }
    }

    const removeShortList =(index:any) => {

     // const list:any = [...shortList];
     setshortList(shortList.filter((_, courseIndex) => courseIndex !== index));
    }

    const testslide =(next:any) =>{
       console.log(dropdownRef,'next');
    }

    const handleAfterChange = (previousSlide:any, state:any) => {
      //{ currentSlide }
      console.log(previousSlide + 5,'previousSlide');
      //setCurrentSlide(state.currentSlide);
      if ((previousSlide + 5) === courseREList.length) {
       // const list:any = [...reCourseList];
       // const selectedList = courseREList[id];
       // console.log(selectedList,'selectedList');
       // list.push(courseREList);
      //  setreCourseList([...reCourseList,...courseREList]);
        console.log('Reached the last slide',currentSlide);
      }
    };

    return (
        <>
       
        <Carousel responsive={responsive} renderButtonGroupOutside={true} ref={dropdownRef}  beforeChange={handleAfterChange}>
        {reCourseList.map((item,index) => ( 
           <div><CourseRecommendation courseItem={item} id={index}  addShortCorse = {handleShortList}></CourseRecommendation ></div>
        ))}
  
</Carousel>
 
<div  className={`${classes.shortListCoursel_Div} ${isShowShorlist? '' : classes.hideList}`}>
 <div className={`${classes.selection_text} ${classes.sub_title}` } id="cart123"> <h2 className='text-heading2'>Shortlisted Courses</h2> </div>
      <div>
      <Carousel responsive={responsive} renderButtonGroupOutside={true} >
        {shortList.map((item:any,index) => (
         <div className={classes.shortlist_card}>
         <div className='flex justify-between'>
           <div>
           <p className={classes.title}>{item.title}</p>
           </div>
           <div >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
           </div>
           </div>
           <div className={classes.img_div} >
   
      <Image src={item.logoUrl} alt='hero' className={classes.img} unoptimized={true}  width={60} height={50} ></Image>

      <p className={classes.h1}>{item.UniName}</p>
      </div>

      <p><button className={classes.remove_button} onClick={() => removeShortList(index)}>Remove</button></p>

       </div>
        ))
        }
          </Carousel>
      </div>
      <div className={classes.div_link}> <p><b><a href="javascript:void(0)" className={classes.a} target="_blank">View & Compare courses</a></b></p></div>
     </div>
        </>
    )

}