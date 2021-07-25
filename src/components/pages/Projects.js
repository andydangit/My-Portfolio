import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Projects = () => (
  <Card>
    <Image src='/images/project_1.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header> <a href="https://www.google.com">  HTML / CSS / Bootstrap </a> </Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Create a live web application for a restaurant to showcase their business
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Projects