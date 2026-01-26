import { RiVerifiedBadgeFill } from "react-icons/ri";

const Frontend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Frontend Developer</h3>
            <div className="skills-box">
                <div className="skills-group">
                    
                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div>
                            <h3 className="skills-name">JavaScript (ES6+)</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>

                    

                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div>
                            <h3 className="skills-name">React</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>
<div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div><h3 className="skills-name">React Native</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div>
                            <h3 className="skills-name">Redux</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    

                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div><h3 className="skills-name">TypeScript</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div><h3 className="skills-name">Tailwind</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div><h3 className="skills-name">Bootstrap</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <RiVerifiedBadgeFill className='badge-check' />
                        <div><h3 className="skills-name">CSS3 / SCSS</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Frontend