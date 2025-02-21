import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id="about" className="main">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatibus soluta, magni voluptatum animi provident?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Software Developer Intern</h1>
                    <p>At Infomatics India</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>B.Tech</h1>
                    <p>Specialised in Computer Science and Engineering</p>
                </div>
            </div>
        </div>
    )
}

export default About