import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default class Footer extends React.Component {
    render() {
        return (
            <Navbar sticky="bottom" bg="light" variant="light">
                <Navbar.Brand href="#">{this.props.name}</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href={"mailto:" + this.props.email}>Contact Me</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}