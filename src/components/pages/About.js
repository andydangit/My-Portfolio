import React from "react";
import './About.css'

function About() {
  return (
    <div className="About_Container">
      <div>
        <h1> Hi, I'm Andy Dang</h1>
        <p> I have work in the IT world for the past 12 year <strong> and now as a software Developer </strong>
        </p>
        <div> <p> I like to spend my spare time if i'm not learning about new Technoloyg then I'm usually watching movies </p></div>
      </div>
      <div>
        <div>
            <h1> Skillset </h1> 
            </div>
            <div>
            <ul> 
                <li> HTML / CSS </li>
                <li> JavaScript</li>
                <li> React</li>
                </ul>
                <ul>
                <li> MySQL</li>
                <li> MongoDB</li>
                <li> Express </li>
                </ul>
                </div>
      </div>
    </div>
  );
}

export default About;
