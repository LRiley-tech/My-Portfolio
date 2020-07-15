import React from 'react'
import './navbar.css'
import Resume from './Resume/Resume.pdf'
import {Link} from 'react-scroll';

const Altbar = () => {
    return (
        <div className="wrapper">
            <nav>
                 <ul>
                     <li><h2 className="logo">Leeangelo Riley</h2></li>
                     <li><Link activeClass="active"
              to="aboutMe--body"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="link"
              ><p>Home</p></Link></li>
                     <li><Link activeClass="active"
              to="projectsPage--body"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="link"
              ><p>Projects</p></Link></li>
                     <li><Link activeClass="active"
              to="skills-body"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="link"
              ><p>Skills</p></Link></li>
                     <li><Link activeClass="active"
              to="inner-width"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="link"
              ><p>Contact</p></Link></li>
                     <li><a className="link" href={Resume} target="_blank" rel="noopener noreferrer"><h3>Resume</h3></a></li>
                 </ul>
            </nav>
        </div>
    )
}

export default Altbar;