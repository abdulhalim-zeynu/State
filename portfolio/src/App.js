import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Header from './Components/Header'
import ProjectGrid from './Components/ProjectGrid'
import Footer from './Components/Footer'

import ProjectData from './ProjectData'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Abdulhalim Zeynu",
      email: "a.zeynu8@gmail.com",
      resume: "https://m.media-amazon.com/images/I/61nt34iuBkL._SS500_.jpg",
      github: "https://github.com/abdulhalim-zeynu",
      projects: ProjectData.projects
    }
  }

  render() {
    return (
      <div>
        <Header name={this.state.name}/>
        <div className="main">
          <Container>
            <center><Jumbotron className="align-items-center">
              <h1>Hi, I am {this.state.name} a Full Stack Developer!</h1>
              <p>
                Here are some of my most recent projects. Visit my github profile to check all of them out! Feel free to view my resume.
              </p>
              <p>
                <center>
                  <Link to="/about"><Button variant="warning">About</Button></Link>{' '}
                  <a href={this.state.github}><Button variant="primary">Github</Button></a>{' '}
                  <a href={this.state.resume}><Button variant="success">Resume</Button></a>
                </center>
              </p>
            </Jumbotron></center>
            <ProjectGrid id="projects" projects={this.state.projects}/>
          </Container>
        </div>
        <Footer email={this.state.email}/>
      </div>
    )
  }
}
