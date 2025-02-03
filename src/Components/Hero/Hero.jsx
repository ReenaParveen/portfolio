import React from "react"
import './Hero.css'
// import profile_img from '../../assets/reeena.jfif'

const Hero = () => {
    return (
        <div className='hero'>
            {/* <img src={profile_img} alt="" /> */}
            <h1>
                { <span>I'm Reena Shareef,</span>}
                Software Developer Intern at Infomatics
            </h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellat possimus quisquam. Sapiente, in vero minus sequi fugit nihil corporis voluptates quas atque unde? Aperiam sed reprehenderit error incidunt nisi nobis, corporis perferendis laborum assumenda rem, distinctio nesciunt ab? Nisi.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero