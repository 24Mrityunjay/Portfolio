import { BiSupport,BiAward,BiBriefcase } from "react-icons/bi";

const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <BiAward className="about-icon"/>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">8 Years Working</span>
            </div>

            <div className="about-box">
                <BiBriefcase className="about-icon"/>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">48 + Projects</span>
            </div>

            <div className="about-box">
                <BiSupport className="about-icon"/>
                <h3 className="about-title">Support</h3>
                <span className="about-subtitle">Online 24/7</span>
            </div>
        </div>

    )
}

export default Info