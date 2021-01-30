import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Project from './Project'

export default class ProjectGrid extends React.Component {
    render() {
        let row1 = []
        let row2 = []

        for(let i = 0; i < this.props.projects.length; i++) {
            if(i < 3)
                row1.push(<Col><Project key={i} project={this.props.projects[i]} /></Col>)
            else
                row2.push(<Col><Project key={i} project={this.props.projects[i]} /></Col>)
        }
        return (
            <Container>
                <Row>{row1}</Row>
                <br />
                <Row>{row2}</Row>
            </Container>
        )
    }
}