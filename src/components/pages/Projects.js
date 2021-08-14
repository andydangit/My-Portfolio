import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Projects_page.css";

const Projects = () => (
  <div className="project_page">
    <h1 className="project_title"> Projects </h1>
    <div className="project_info">
      <div className="project_card">
        <Card>
        <a href="https://cafe-dao.netlify.app">
          <Image src="/images/project_1.png" wrapped ui={true} />
          </a>
          <Card.Content>
            <Card.Header>
              {" "}
              <a href="https://cafe-dao.netlify.app"> Banh Mi Sandwich</a>{" "}
            </Card.Header>
            <Card.Description>
              Create a live web application for a restaurant to showcase their
              business
            </Card.Description>
          </Card.Content>
          <Card.Content>HTML / CSS / Bootstrap</Card.Content>
        </Card>
      </div>

{/* Card 2  */}
      <div className="project_card">
        <Card>
        <a href="https://andydangit.github.io/Exercise_List/">
          <Image src="/images/project_2.png" wrapped ui={true} />
          </a>
          <Card.Content>
            <Card.Header>
              {" "}
              <a href="https://andydangit.github.io/Exercise_List/">
                {" "}
                TO DO List{" "}
              </a>{" "}
            </Card.Header>
            <Card.Description>
              SPA for Todo list and a quote that pull data from Type.fit api
            </Card.Description>
          </Card.Content>
          <Card.Content> Javascript / Type.fit api </Card.Content>
        </Card>
      </div>

{/* Card 3  */}
      <div className="project_card">
        <Card> 
          <a href="https://mandalorian-fansite.netlify.app/home">
          <Image src="/images/project_3.png"  wrapped ui={true} />
          </a>
          <Card.Content>
            <Card.Header>
              {" "}
              <a href="https://mandalorian-fansite.netlify.app/home">
                {" "}
                Mandalorian Fansite{" "}
              </a>{" "}
            </Card.Header>
            <Card.Description>
             React.js Collaboration group project at Nucamp Programming Bootcamp
            </Card.Description>
          </Card.Content>
          <Card.Content> React / React Router / ReactStrap </Card.Content>
        </Card>
      </div>
    </div>
  </div>
);

export default Projects;
