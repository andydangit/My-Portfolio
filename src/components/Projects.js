import React from "react";
import '../App.css';
import { Button } from './Button';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1> Projects </h1>
      <p> This is my project </p>
      <div className="projects-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Projects xx
        </Button>
      </div>
    </div>
  );
}

export default Projects;
