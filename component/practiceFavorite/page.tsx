import React, { useState } from 'react';
import { icons } from '../../src/utils/svg.js';
 
const PracticeFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
 
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
 
  const handleClickShortlist = () => {
    if (!hasAnimated) {
      setAnimateHeart(true);
      setIsShortlisted(true);
      setHasAnimated(true);
      setTimeout(() => {
        setIsFavorite(true);
        setAnimateHeart(false);
      }, 1000);
    }
  };
 
  return (
    <div className='max-w-4xl mx-auto p-5 relative'>
      <div
        className='bg-gray-500 w-fit mb-10 p-3 flex items-center cursor-pointer'
        onClick={handleClickFavorite}
      >
        {isFavorite ? icons.heartFilled('w-[30px] h-[30px] text-white') : icons.heartOutlined('w-[30px] h-[30px]')}
        <p>Favourites</p>
      </div>
      <div className='flex flex-col transition-all hover:scale-[1.01] w-fit'>
        <div className='flex flex-col bg-gray-50 shadow-gray-400 p-4 pb-[30px] flex-1'>
          <div className='flex items-center justify-between pb-4 h-[64px]'>
            <p className='font-semibold'>Paragraph</p>
            { icons.hiClose('w-[30px] wh-[30px]') }
          </div>
          <div className='flex gap-2 pb-2 h-[80px]'>
            <p>Uni name</p>
          </div>
        </div>
        <div
          className='bg-lightGrey hover:bg-black flex items-center justify-center pt-3 pb-3 cursor-pointer'
          onClick={handleClickShortlist}
        >
          <p className='text-white'>{isShortlisted ? 'Shortlisted' : 'Shortlist'}</p>
        </div>
      </div>
      {animateHeart && (
        <div className='absolute moving-heart'>
          {icons.heartOutlined('w-[30px] h-[30px] text-red-500')}
        </div>
      )}
      <style jsx>{`
        .moving-heart {
          position: absolute;
          animation: moveHeart 1s forwards ease-in-out;
        }
 
        @keyframes moveHeart {
          to {
            transform: translate(0, -200px);
          }
        }
      `}</style>
    </div>
  );
};
 
export default PracticeFavorite;