import React from 'react'
import './contact.css'

const ContactPage = () => {
    return (
        <div className="skills-body">
            <div className="inner-width">
                <h1>Contact me</h1>
                <input type="text" className="name" placeholder="Your name"/>
                <input type="email" className="email" placeholder="Your email"/>
                <textarea rows="1" placeholder="Message" className="message" />
                <button className="neon">Submit</button>
            </div>
        </div>
    )
}

export default ContactPage;
