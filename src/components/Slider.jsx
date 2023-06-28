import React from 'react';
import mgmSlider from '../utils/mgmSlider.png'
import '../Design.css'

export const Slider = () => {
  return (
    <div className="h-1/2">
      <img src={mgmSlider}  alt="" srcset="" className="h-[200px] w-[1000px] md:h-[100vh] md:w-[100vw] p-3 rounded-3xl"/>
    </div>
  );
};
