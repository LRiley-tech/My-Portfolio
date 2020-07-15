import React from 'react';
import Altbar from '../Navbar/navbar'
import Aboutme from '../About-me/aboutMe';
import ProjectsPage from '../ProjectsPage/projectsPage';
import Skills from  '../Skills/skills';
import ContactPage from '../Contact/ContactPage';
import Footer from '../Footer/footer'


const Portfolio = () => {
    return (
        <>
            <Altbar />
            <Aboutme />
            <ProjectsPage />
            <Skills />
            <ContactPage />
            <Footer />
        </>
    )
}

export default Portfolio;