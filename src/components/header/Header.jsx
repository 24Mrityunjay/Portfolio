import './Header.css';
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile, AiOutlineMessage } from "react-icons/ai";
import { IoBriefcaseOutline, IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
    function scrollFunc() {
        const headerC = document.querySelector(".header");
        if (window.scrollY >= 80) {
            headerC.classList.add("scroll-header");
        } else {
            headerC.classList.remove("scroll-header");
        }
    }
    window.addEventListener("scroll", scrollFunc);

    const [open, setOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className='header'>
            <nav className="nav_container flex items-center justify-between">
                <a href="" className="nav_logo">Mrityunjay Yadav</a>
                <div className={`nav_menu ${open ? "show" : "hide"}`}>
                    <ul className="nav_list flex items-center justify-center">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav_link flex items-center active" : "nav_link flex items-center"}>
                                <AiOutlineHome size="15" />
                                <label className='nav-item-label'>Home</label>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav_link flex items-center active" : "nav_link flex items-center"}>
                                <AiOutlineUser size="15" />
                                <label className='nav-item-label'>About</label>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? "nav_link flex items-center active" : "nav_link flex items-center"}>
                                <AiOutlineFile size="15" />
                                <label className='nav-item-label'>Skills</label>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "nav_link flex items-center active" : "nav_link flex items-center"}>
                                <IoBriefcaseOutline size="15" />
                                <label className='nav-item-label'>Services</label>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#qualification' ? "nav_link flex items-center active" : "nav_link flex items-center"}>
                                <IoBriefcaseOutline size="15" />
                                <label className='nav-item-label'>Portfolio</label>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav_link flex items-center active" : "nav_link flex items-center"}>
                                <AiOutlineMessage size="15" />
                                <label className='nav-item-label'>Contact</label>
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className="nav_toggle"
                    onClick={() => setOpen(!open)}
                >
                    {open
                        ? <IoClose color='var(--text-color)' size={20} />
                        : <IoMenu color='var(--text-color)' size={20} />
                    }
                </button>
            </nav>
        </header>
    )
}

export default Header