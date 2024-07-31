import  { useState, useEffect } from 'react';

export function useTypewriter(text:any, speed = 80){
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        console.log(text.charAt(i),i);
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  console.log(displayText,'consol');

  return displayText;
};