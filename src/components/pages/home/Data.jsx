import React from 'react';
import { PiHandWavingThin, PiPaperPlaneTilt } from "react-icons/pi";

const Data = () => {
  return (
    <div className="home-data">
          <h1 className="home-title">Mrityunjay Yadav <PiHandWavingThin /></h1>
          <h3 className="home-subtitle">Senior Frontend Engineer<p className="home-subtitle-info">(Web & Mobile Applications)</p></h3>
          
          <p className="home-description">I'm Software Engineer based in India, passionate about building clean, scalable, and high-performance web and mobile applications.</p>
          <a href="#contact" className="button button_flex">
            Say Hello <PiPaperPlaneTilt/>
          </a>
    </div>
  )
}

export default Data