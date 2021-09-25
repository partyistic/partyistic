import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Inspiration">Inspiration</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Parties">Parties</Nav.Link>
                        <Nav.Link href="/Profile">Profile</Nav.Link>
                        <Nav.Link href="/About">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}