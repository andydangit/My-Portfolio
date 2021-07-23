import React from "react";
import './About.css'

function About() {
  return (
    <div className="About_Container">
      <div>
        <h1> Hey, I'm Andy. </h1>
        <p> My goal is to be a full stack developer</p>
      </div>
      <div>
        <div>
            <h1> Skillset </h1> 
            </div>
            <tr> 
                <li> HTML / CSS </li>
                <li> JavaScript</li>
                <li> React</li>
                <li> MySQL</li>
                <li> MongoDB</li>
                <li> Express </li>
            </tr>
      </div>
    </div>
  );
}

export default About;
