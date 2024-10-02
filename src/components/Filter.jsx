import React from "react";
import "../App.css";
import CustomRangeSlider from '../components/CustomRangeSlider.jsx'

function Filter() {
  return (
    <div className="filter-section">
      <div className="flexbox">
            <p>Filters</p>
            <a href="/" className='text14 bluetext'>Clear all</a>
        </div>

      
      <div className="filter-item">
        
          <CustomRangeSlider name={'Salary Range'}/>
        
      </div>

      
      <div className="filter-item">
        <h4>Condition 1</h4>
        <div>
          <label>
            <input type="checkbox" name="condition1-option1" /> Option 1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="condition1-option2" /> Option 2
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="condition1-option3" /> Option 3
          </label>
        </div>
      </div>

      
      <div className="filter-item">
        <h4>Condition 2</h4>
        <div>
          <label>
            <input type="checkbox" name="condition2-option1" /> Option 1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="condition2-option2" /> Option 2
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="condition2-option3" /> Option 3
          </label>
        </div>
      </div>

      <div className="rating-section">
      <h4>Rating</h4>
        <div className="rating">
          <label>
            <input type="checkbox" />
          </label>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`star ${index < 5 ? "full" : "empty"}`}
            />
          ))}
        </div>
        <div className="rating">
          <label>
            <input type="checkbox" />
          </label>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`star ${index < 4 ? "full" : "empty"}`}
            />
          ))}
        </div>
        <div className="rating">
          <label>
            <input type="checkbox" />
          </label>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`star ${
                index < 2 ? "full" : index === 2 ? "half" : "empty"
              }`}
            />
          ))}
        </div>
        <div className="rating">
          <label>
            <input type="checkbox" />
          </label>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`star ${index < 2 ? "full" : "empty"}`}
            />
          ))}
        </div>
        <div className="rating">
          <label>
            <input type="checkbox" />
          </label>
          <div className={`star full`} />
          {[...Array(4)].map((_, index) => (
            <div key={index} className={`star empty`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
