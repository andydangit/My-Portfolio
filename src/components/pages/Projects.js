import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Projects_page.css";

const Projects = () => (
  <div className="project_page">
    <h1 className="project_title"> Projects </h1>
    <div className="project_info">
      <div className="project_card">
        <Card>
          <Image src="/images/project_1.png" wrapped ui={false} />
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

      <div className="project_card">
        <Card>
          <Image src="/images/project_2.png" wrapped ui={false} />
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
    </div>
  </div>
);

export default Projects;
