import React, { createContext } from 'react';

const stepsData = {
  data : {
    activeTab: 0,
    destination:[],
    stepAction: 1,
    isShowAnswer:false,
    subjects:[],
    studyLevel:[]
},
  setData: () => {}

}

const AbroadContext = createContext<any>({stepsData});

export default AbroadContext;