import React, { useState } from 'react';
import carotdown from '../assets/image/Caretdown.png'
import RangeSlider from 'react-range-slider-input';
import "react-range-slider-input/dist/style.css";
import Caretright from '../assets/image/Caretright.png'
import dollar from '../assets/image/dollar-sign.png'

export default function CustomRangeSlider({name}) {
  const [isOpen, setIsOpen] = useState(false); 
  const [value, setValue] = useState([30, 60]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button-range">
        {name} <span>{isOpen ? <img src={carotdown}/> : <img src={Caretright}/>}</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="flexbox mb20">
            <div className="range">
              <img src={dollar} alt="" />
              <p>20</p>
            </div>
            to
            <div className="range">
              <img src={dollar} alt="" />
              <p>100</p>
            </div>
          </div>
          <RangeSlider value={value} onInput={setValue} />
        </div>
      )}
    </div>
  );
}
