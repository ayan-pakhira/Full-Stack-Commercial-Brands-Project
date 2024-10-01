import React, { useState } from 'react';
import carotdown from '../assets/image/Caretdown.png'
import Caretright from '../assets/image/Caretright.png'

export default function Dropdown({name,options}) {
  const [isOpen, setIsOpen] = useState(false); // useState should be here

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown open state
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {name} <span>{isOpen ? <img src={carotdown}/> : <img src={Caretright}/>}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
