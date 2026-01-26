import React, { useState } from 'react';
import './Qualifications.css';
import { RiGraduationCapFill } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section-title">Qualification</h2>
            <p className="section-subtitle">My personel journey</p>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    
                    <div className={toggleState === 1
                        ? "qualification-button qualification-active button--flex"
                        : "qualification-button button--flex"} onClick={() => toggleTab(1)}>
                        <BsBriefcaseFill className='qualification-icon'/>
                        Experience
                    </div>
                    <div className={toggleState === 2
                        ? "qualification-button qualification-active button--flex"
                        : "qualification-button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <RiGraduationCapFill className='qualification-icon'/>
                        Education
                    </div>

                </div>

                <div className="qualification-sections">
                    <div className={toggleState === 2
                        ? "qualification-content qualification-content-active"
                        : "qualification-content"}
                    >
                        <div className="qualification-data">
                            <div className='grid justify-end items-center'>
                                <h3 className="qualification-title">BBDNIIT Lucknow</h3>
                                <span className="qualification-subtitle">
                                    B.Tech (CSE)
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    Jul 2014 – Jun 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">DAV Bina Sonbhadra</h3>
                                <span className="qualification-subtitle">
                                    Intermediate
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    March 2013 - March 2014
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification-data">
                            <div className='grid justify-end items-center'>
                                <h3 className="qualification-title">DAV Bina Sonbhadra</h3>
                                <span className="qualification-subtitle">
                                    Highschool
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    March 2009 - March 2010
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                {/* <span className="qualification-line"></span> */}
                            </div>
                        </div>

                      
                    </div>

                    <div className={toggleState === 1
                        ? "qualification-content qualification-content-active"
                        : "qualification-content"}
                    >
                        <div className="qualification-data">
                            <div className='grid justify-end items-center'>
                                <h3 className="qualification-title">Associate Software Engineer</h3>
                                <span className="qualification-subtitle">          
                                    Sigma Infosolutions Ltd.
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    Dec 2018 - Dec 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">Software Engineer</h3>
                                <span className="qualification-subtitle">
                                    Sigma Infosolutions Ltd.
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    Jan 2021 - Aug 2021
                                </div>
                            </div>
                        </div>
                    
                        <div className="qualification-data">
                            <div className='grid justify-end items-center'>
                                <h3 className="qualification-title">ReactJs Developer</h3>
                                <span className="qualification-subtitle">
                                    Hemandra Consulting LLC
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    Aug 2021 - Jul 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

 <div className="qualification-data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">Senior Software Engineer l</h3>
                                <span className="qualification-subtitle">
                                    Evolving Systems
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    July 2022 - June 2023
                                </div>
                            </div>
                        </div>
                        
                         <div className="qualification-data">
                            <div className='grid justify-end items-center'>
                                <h3 className="qualification-title">
Senior Software Engineer ll</h3>
                                <span className="qualification-subtitle">
                                    Evolving Systems
                                </span>

                                <div className="qualification-calendar">
                                    <FaRegCalendarAlt size="12" className="mr-1"/>
                                    June 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                {/* <span className="qualification-line"></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Qualifications