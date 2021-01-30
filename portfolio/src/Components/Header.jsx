import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" variant="light">
                <Navbar.Brand href="/">{this.props.name}</Navbar.Brand>
            </Navbar>
        )
    }
}