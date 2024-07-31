import { useEffect, useState,useContext } from 'react';
import {useTypewriter}  from './useTypewriter'
import AbroadContext from '../../service/abroad-context';

// const Typewriter = ({ text:any, speed :any}) => {
//     const displayText = useTypewriter(text, speed);
  
//     return <p>{displayText}</p>;
//   };
  
//   export default Typewriter;

export default function Typewriter(props:any){
   // const displayText = useTypewriter(props.text, props.speed);
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false);

    const [data,setdata] = useContext(AbroadContext);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < props.text.length) {
          setDisplayText((prevText) => prevText + props.text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval);
          setTypingComplete(true);
          const contextvalue = {...data};
          contextvalue.isShowAnswer = true;
          setdata(contextvalue);
        }
      }, 50); // Adjust typing speed here (milliseconds per character)
  
      return () => clearInterval(interval);
    }, [currentIndex, props.text]);

    return (<>
    <p><span>{displayText}</span>
      {!typingComplete && <span>|</span>}</p>
    </>)
}