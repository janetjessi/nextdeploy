import React, { useState } from 'react';

const slides = [
    // Content for slide 1
    <div>Slide 1 Content</div>,
    // Content for slide 2
    <div>Slide 2 Content</div>,
    // ... and so on
  ];

export default function Slide(props:any){

   

        const [currentIndex, setCurrentIndex] = useState(0);
      
        const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        };
      
        const handlePrevious = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        };

    return (
        <>
       <div className="relative overflow-hidden w-full h-[300px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full opacity-0 transition duration-700 ease-in-out ${
            index === 0 ? 'opacity-100 z-10' : '' // Make first slide visible initially
          } ${currentIndex === index ? 'opacity-100 z-10' : ''}`}
        >
          {slide} {currentIndex} {index}
        </div>
      ))}
      <button className="absolute top-1/2 right-4 focus:outline-none" onClick={handleNext}>
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        next
      </button>
      <button className="absolute top-1/2 left-4 focus:outline-none" onClick={handlePrevious}>
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        pre
      </button>
    </div>
        </>
    )
}