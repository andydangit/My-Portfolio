import React from "react";
import './About.css';
import '../../components/Projects.css';


function About() {

  const name = "Andy Dang";

  return (
    <div className="About_Container">
      <h1 className="projects-container"> Hello</h1>
      <div class="about_info">
        <p> My name is {name} and I am an IT Specialist with over 12+ years of experience in Technical Support and System Management. I have gained my Bachelor Degree in  <strong>Management Information System </strong> from the University of Central Oklahoma, after which I completed certification in advanced computer language courses. Currently I am seeking to apply my acquired skills to deliver coding excellence as a Software Developer. 
        </p>
      </div>
      <div class="about_info"> <p> I generally enjoy the challenge of problem solving and acquiring new knowledge. In my spare time I like to go for a run while listening to podcasts on leadership, business and the latest technology. In addition, I also enjoy a good movie and social gathering with families and friends. </p> </div>
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
