import React from 'react';
import { BsMouse } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";

const ScrollDown = () => {
  return (
    <div className="home-scroll">
      <button className="home-scroll-botton button-flex" onClick={() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        })
      }>
            <BsMouse className='home-scroll-mouse'/>
            <span className="home-scroll-name">Scroll Down</span>
            <FaArrowDown  className='home-scroll-arrow'/>
        </button>
    </div>
  )
}

export default ScrollDown