import React from 'react';
import Altbar from '../Navbar/navbar'
import Aboutme from '../About-me/aboutMe';
import ProjectsPage from '../ProjectsPage/projectsPage';
import Skills from  '../Skills/skills';
import ContactPage from '../Contact/ContactPage';


const Portfolio = () => {
    return (
        <>
            <Altbar />
            <Aboutme />
            <ProjectsPage />
            <Skills />
            <ContactPage />
        </>
    )
}

export default Portfolio;