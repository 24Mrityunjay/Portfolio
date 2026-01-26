import './Footer.css';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mrityunjay Yadav</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
         <a
                       href="https://github.com"
                       target="_blank"
                       className="footer__social-link"
                       rel="noopener noreferrer"
                   >
                       <IoLogoGithub />
                   </a>
                     <a
                       href="https://www.instagram.com/"
                       target="_blank"
                       className="footer__social-link"
                       rel="noopener noreferrer"
                   >
                       <IoLogoInstagram />
                   </a>
                     <a
                       href="https://www.linkedin.com/in/mrityunjay-yadav/"
                       target="_blank"
                       className="footer__social-link"
                       rel="noopener noreferrer"
                   >
                       <IoLogoLinkedin />
                   </a>
                     <a
                       href="https://facebook.com/"
                       target="_blank"
                       className="footer__social-link"
                       rel="noopener noreferrer"
                   >
                       <IoLogoFacebook />
                   </a>
          
        </div>

        <span className="footer__copy">
          &#169; Mrityunjay. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
