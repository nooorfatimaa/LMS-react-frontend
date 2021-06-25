import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand className="p-1">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/COMSATS_new_logo.jpg" width="30" height="30" className="d-inline-block align-top"/>{' '}
                Comsats University Islamabad LMS
            </Navbar.Brand>
            <Nav className="offset-6">
            <NavDropdown title="Mr. Rashid Mukhtar" className="mr-2">
                <NavDropdown.Item as={Link} to={"/add"}>Add Assignment</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/"}>Delete Assignment</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/update"}>Update Assignment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Log Out</NavDropdown.Item>
            </NavDropdown></Nav>
        </Navbar>
    );
}

export default Header;