import React from "react";
import './About.css';
import '../../components/Projects.css';


function About() {

  const name = "And Dang";

  return (
    <div className="About_Container">
      <h1 className="projects-container"> Hello</h1>
      <div class="about_info">
        <p> My name is  <strong>{name} </strong> and I have work in IT for the past 12 year from  <strong> Help Desk </strong> to <strong> System Admin </strong>  and now  aiming to transition to <strong> software Developer </strong>. I enjoy the challenge of solving project.  In my spare time if i'm not learning about new technology, I'm usually watching movies.
        </p>
      </div>
      <div>
        <div className="about_title2">
            <h1 > Skillset </h1> 
            </div>
            <div className="about_language">
            <ul> 
                <li> HTML / CSS </li>
                <li> JavaScript</li>
                </ul>
                <ul> 
                <li> React</li>
                <li> Express </li>
                </ul>
                <ul>
                <li> MySQL</li>
                <li> MongoDB</li>
                </ul>
                </div>
      </div>
    </div>
  );
}

export default About;
