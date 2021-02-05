import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar className='navbar-container' collapseOnSelect expand="lg" variant='dark' >
                <Navbar.Brand >
                    <Link to='/'>
                        LOGO
                    </Link>
                </Navbar.Brand>
                <div className="flex-grow-1"></div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 d-flex justify-content-between">
                        <Nav.Link href="#features">Events Management</Nav.Link>
                        <Nav.Link href="#congress">Congress & Exhibition</Nav.Link>
                        <Nav.Link href="#production">Production</Nav.Link>
                        <Nav.Link href="#engagement">Engagement</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
