import React from 'react'
import logo from "../assets/image/Logo.png";
import bell from "../assets/image/bell.svg";
import cart from "../assets/image/carts.svg";
import avtar from "../assets/image/G1.jpg";
import smallcaret from '../assets/image/smallcaret.png'

import Dropdown from './Dropdown'


export default function Header() {
  
  const options = ["Option 1", "Option 2"];
  return (
    <div className='navBar'>
      <img src={logo} />
      <div className="navLinks">
        <a href="/">Shop</a>
        <a href="/">New collection</a>
        <a href="/">Review</a>
        <Dropdown options={options} name={'Contact'}/>
      </div>
      <div className="flexbox gap15">
        <img src={cart} />
        <img src={bell} />
        <div className="flexbox justifystart">
          <img src={avtar}/>
          <p>Amanda Green</p>
          <img src={smallcaret}/>
        </div>
      </div>

    </div>
  )
}
