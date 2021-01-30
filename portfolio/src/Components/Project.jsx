import React from 'react'
import {Badge, Button, Card} from 'react-bootstrap'

export default class Project extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="200px" width="200px" src={this.props.project.thumbnail} />
                <Card.Body>
                    <Card.Title>{this.props.project.title} <Badge variant="success">{this.props.project.language}</Badge></Card.Title>
                    <Card.Text>
                    {this.props.project.desc}
                    </Card.Text>
                    <center>
                        <a href={this.props.project.github}><Button variant="secondary">Github</Button></a> {' '}
                        <a href={this.props.project.url}><Button variant="warning">View</Button></a>
                    </center>
                </Card.Body>
            </Card>
        )
    }
}