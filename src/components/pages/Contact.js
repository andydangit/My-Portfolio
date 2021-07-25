import React from 'react';
import '../../components/Projects.css';
import { Button } from 'semantic-ui-react'

function Contact() {
    return (
        <div>
            <h1 className="projects-container"> Contact Me</h1> 
            <div className="contact_container">
            
            
            <div> 
                <p> Feel Free to reach out to me and I will get back with you. </p>
            </div >
            <div className="contact_button"> 
            <Button basic color='black'> <a href="mailto:andy.dang.it@gmail.com">Andy.dang.it@gmail.com </a></Button>
            <Button basic color='black'> <a href="https://github.com/andydangit"> Github </a></Button>
            <Button basic color='black'> <a href="https://www.linkedin.com/in/andy-dang-12693341/"> Linkedin </a></Button>
            </div> 
            </div> 
        </div>

    )
}

export default Contact
