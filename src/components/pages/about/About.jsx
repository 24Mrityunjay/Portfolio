import './About.css';
import AboutImg from '../../../assets/Mrityunjay.jpg';
import CV from '../../../assets/MrityunjayCV.pdf';
import { FaRegFileAlt } from "react-icons/fa";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
          <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My Introduction</p>
        <div className="about-container grid">
            <img src={AboutImg} alt='' className='about-img' />
            <div className="about-data">
                <Info />
          <p className="about-description">
            Experienced Software Engineer with 7+ years of expertise in building scalable, high-performance
            web and mobile applications. Specialized in React JS, React Native, and Redux, with a solid
            foundation in JavaScript (ES6+), HTML5, and CSS3. Proven ability to lead product development
            from concept to deployment, optimize performance, and collaborate in Agile environments.
            Strong problem-solving mindset with a focus on clean, maintainable code.

                </p>
                <a href={CV} download='' className="button button-flex">Download CV <FaRegFileAlt /></a>
            </div>
        </div>
    </section>
  )
}

export default About