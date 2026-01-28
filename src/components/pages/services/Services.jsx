import { useState } from 'react';
import './Services.css';
import { BiArrowToRight, BiCheckCircle, BiServer } from 'react-icons/bi'
import { CgClose } from "react-icons/cg";

import { FaLaptopCode,FaMobileAlt, FaTachometerAlt } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";


const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <div className='section-subtitle'>
                <span>What i offer</span>
            </div>

            <div className="services-container grid">
                <div className="services-content">
                    <div>
                        <FaLaptopCode className='uil uil services-icon' />
                        <h3 className="services-title">Web Application Development</h3>
                    </div>

                    <span className="services-button" onClick={()=>toggleTab(1)}>
                        View More{" "}
                        <BiArrowToRight className='uil uil-arrow-right services-button-icon' />
                    </span>

                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <CgClose onClick={()=>toggleTab(0)} className='uil uil-times services-modal-close' />
                            <h3 className="services-modal-title">Web Application Development</h3>
                            <p className="services-modal-description">
                                I build scalable, responsive, and high-performance web applications using modern frontend technologies, ensuring clean architecture and excellent user experience.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Develop modern web apps using React JS.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Build reusable, modular UI components.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Integrate and manage REST APIs.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Implement state management using Redux & Hooks.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Ensure responsive design and cross-browser compatibility.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Optimize performance and application scalability.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <FaMobileAlt className='uil uil services-icon' />
                        <h3 className="services-title">Mobile App Development</h3>
                    </div>

                    <span className="services-button" onClick={()=>toggleTab(2)}>
                        View More{" "}
                        <BiArrowToRight className='uil uil-arrow-right services-button-icon' />
                    </span>

                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <CgClose onClick={()=>toggleTab(0)} className='uil uil-times services-modal-close' />
                            <h3 className="services-modal-title">Mobile App Development</h3>
                            <p className="services-modal-description">
                                I develop cross-platform mobile applications with a focus on performance, usability, and maintainability.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Build cross-platform apps using React Native.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Deliver smooth user experiences on Android & iOS.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Integrate APIs and manage application state.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Optimize app performance and load times.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Handle app deployment and production readiness.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <FaTachometerAlt className='uil uil services-icon' />
                        <h3 className="services-title">Frontend Architecture & Performance</h3>
                    </div>

                    <span className="services-button"  onClick={()=>toggleTab(3)}>
                        View More{" "}
                        <BiArrowToRight className='uil uil-arrow-right services-button-icon' />
                    </span>

                    <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <CgClose onClick={()=>toggleTab(0)} className='uil uil-times services-modal-close' />
                            <h3 className="services-modal-title">Frontend Architecture & Performance</h3>
                            <p className="services-modal-description">
I design robust frontend architectures that are scalable, maintainable, and optimized for performance.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Design component-driven architectures.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Migrate legacy applications (Angular → React).
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Improve code maintainability and reusability.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Implement role-based access control.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Optimize rendering, data flow, and UI performance.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Ensure clean, readable, and testable code.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                 <div className="services-content">
                    <div>
                        <HiOutlineSparkles className='uil uil services-icon' />
                        <h3 className="services-title">Product Development & UI Modernization</h3>
                    </div>

                    <span className="services-button"  onClick={()=>toggleTab(4)}>
                        View More{" "}
                        <BiArrowToRight className='uil uil-arrow-right services-button-icon' />
                    </span>

                    <div className={toggleState === 4 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <CgClose onClick={()=>toggleTab(0)} className='uil uil-times services-modal-close' />
                            <h3 className="services-modal-title">Product Development & UI Modernization</h3>
                            <p className="services-modal-description">
I contribute to end-to-end product development, transforming complex business requirements into intuitive user interfaces.                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Lead frontend development from concept to deployment.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Build enterprise-grade products and dashboards.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Centralize and streamline user workflows.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Collaborate with cross-functional teams in Agile environments.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <BiCheckCircle className=' uil-check-circle services-modal-icon' />
                                    <p className="services-modal-info">
                                        Modernize legacy UIs for better usability and performance.
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services