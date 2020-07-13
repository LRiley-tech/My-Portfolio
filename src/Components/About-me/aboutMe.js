import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutMe--body">
        <div className="aboutMe">
        <h1>Leeangelo Riley</h1>
            <img className="port-img" src="/images/Leeangelo-Riley.png" alt="me" />
            <h1>Fullstack Developer</h1>
            <p className="about-text">An outgoing web developer who has devloped skills from the rigrous Road to Hire program. Under the program for 6 months developing frontend and backend skills.
                Learned professional development skills as well having mentors mentor and teach me throughout the program</p>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </div>
        </div>
    )
}


export default AboutMe;