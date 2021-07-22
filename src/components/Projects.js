import React from "react";
import { Button } from './Button';

function Projects() {
  return (
    <div className="projects-container">
      <h1> Projects </h1>
      <p> This is my project </p>
      <div className="projects-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Projects xx
        </Button>
      </div>
    </div>
  );
}

export default Projects;
