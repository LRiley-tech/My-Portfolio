import React from 'react'
import './aboutMe.css'
import {Link} from 'react-scroll';

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
                <Link activeClass="active"
              to="projectsPage--body"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="link"
              ><span></span>
              <span></span>
              <span></span>
              </Link>
                </div>
        </div>
        </div>
    )
}


export default AboutMe;