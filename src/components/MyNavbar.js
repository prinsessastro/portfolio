import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import '../App.css';

const MyNavbar = ({links}) => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="http://startti.tredu.fi">Tredun sivu</Nav.Link>
                <Nav.Link href="http://wilma.tampere.fi">Wilma</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    {links.map(link =>
                    <NavDropdown.Item key={link.id} href={link.url}>{link.desc}</NavDropdown.Item>
                    )}
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div> 
    );
}

export default MyNavbar;