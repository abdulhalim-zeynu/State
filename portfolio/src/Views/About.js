import React from 'react'
import {Button, Container, Card} from 'react-bootstrap'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default class About extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Abdulhalim Zeynu",
            email: "a.zeynu8@gmail.com",
            about: "Full-Stack Web Developer"
        }
    }

    render() {
        return (
            <div>
                <Header name={this.state.name}/>
                <br />
                <Container>
                    <Card className="align-items-center">
                        <Card.Body>{this.state.about}</Card.Body>
                    </Card>
                    <br />
                    <center><a href="/"><Button variant="success">Go Back</Button></a></center>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer className="footer" email={this.state.email}/>
            </div>
        )
    }
}