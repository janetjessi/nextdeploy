// components/Menu.js
import React, { useState } from 'react';

export default function Menu() {
  const [isLevel2Open, setIsLevel2Open] = useState(false);
  const [isLevel3Open, setIsLevel3Open] = useState(false);

  const level2Expand = () => {
    setIsLevel2Open(true);
  };

  const level2Collapse = () => {
    setIsLevel2Open(false);
  };

  const level3Expand = () => {
    setIsLevel3Open(true);
  };

  const level3Collapse = () => {
    setIsLevel3Open(false);
  };

  return (
    <header className="relative w-full h-screen bg-black bg-opacity-80">
      <div className="bg-white w-[350px] h-full overflow-y-auto overflow-x-hidden relative">
        <div className="absolute top-5 left-[375px] w-9 h-9 bg-white rounded-full text-center leading-9 cursor-pointer">x</div>
        <nav  className={`p-5 transition-transform ${isLevel2Open || isLevel3Open ? '-translate-x-full' : ''} bg-pink-500 h-full`}>
          <div className="p-2.5 cursor-pointer relative" onClick={level2Expand}>
            Click Me for Level 2

          </div>
          <div className="p-2.5 cursor-pointer">Nav Item 1</div>
          <div className="p-2.5 cursor-pointer">Nav Item 2</div>
          <div className="p-2.5 cursor-pointer">Nav Item 3</div>
        </nav>
        <nav id="level2Nav" className={`p-5 transition-transform transform ${isLevel2Open ? 'translate-x-0' : 'translate-x-full'} bg-orange-500 h-full absolute top-0 left-0 w-full`}>
          <div className="p-2.5 cursor-pointer relative" onClick={level2Collapse}>
           
            Go back to Level 1
          </div>
          <div className="p-2.5 cursor-pointer" onClick={level3Expand}>
            Click Me for Level 3
          </div>
          <div className="p-2.5 cursor-pointer">SubNav Item 1</div>
          <div className="p-2.5 cursor-pointer">SubNav Item 2</div>
          <div className="p-2.5 cursor-pointer">SubNav Item 3</div>
        </nav>
        <nav className={`p-5 transition-transform transform ${isLevel3Open ? 'translate-x-0' : 'translate-x-full'} bg-blue-500 h-full absolute top-0 left-0 w-full`}>
          <div className="p-2.5 cursor-pointer relative" onClick={level3Collapse}>
            
            Go back to Level 2
          </div>
          <div className="p-2.5 cursor-pointer">SubSubNav Item 1</div>
          <div className="p-2.5 cursor-pointer">SubSubNav Item 2</div>
          <div className="p-2.5 cursor-pointer">SubSubNav Item 3</div>
        </nav>
      </div>
    </header>
  );
}
