import React, { useState } from 'react';
import carotdown from '../assets/image/Caretdown.png';
import Caretright from '../assets/image/Caretright.png';

export default function CheckboxDropdown({ name, showRating }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rating, setRating] = useState(0); 
  const [selectedItems, setSelectedItems] = useState([]); 


  const ratingOptions = [1, 2, 3, 4, 5];
  const checkboxItems = ['Option 1', 'Option 2', 'Option 3']; 


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedItems((prevSelectedItems) =>
      checked
        ? [...prevSelectedItems, value] 
        : prevSelectedItems.filter((item) => item !== value) 
    );
  };

 
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-button">
        {name} <span>{dropdownOpen ? <img src={carotdown} alt="Collapse" /> : <img src={Caretright} alt="Expand" />}</span>
      </button>

      {dropdownOpen && (
        <div className="dropdown-content">
          {showRating ? (
            <div className="rating-section">
            {ratingOptions.map((value) => (
              <div key={value} className="flexbox justifystart mb5">
                <input
                  type="checkbox"
                  id={`rating-${value}`} 
                  name="rating" 
                  value={value}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)} 
                />
                <label htmlFor={`rating-${value}`} className="star-label">
                  {'★'.repeat(value)} 
                </label>
              </div>
            ))}
          </div>
          ) : (
          
            <div className="checkbox-section">
              {checkboxItems.map((item) => (
                <div key={item} className='flexbox justifystart mb5'>
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedItems.includes(item)}
                    onChange={handleCheckboxChange}
                  />
                  <label>{item}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
