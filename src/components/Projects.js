import React from "react";
import '../App.css';
import { Button } from './Button';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1> Andy Dang </h1>
      <h2 className="jobTitle"> Full Stack Developer </h2>
      <p className="paragraph"> I build and design apps that focus on the user experience. </p>
      <div className="projects-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          My Projects
        </Button>
      </div>
    </div>
  );
}

export default Projects;
