import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

    return (
        <>
            {/* Navbar Desktop */}
            <Navbar bg="" expand="lg" className="d-none d-lg-block">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src="/logo.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Experience</Nav.Link>
                        <Nav.Link href="/">Projects</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Navbar Mobile (Offcanvas) */}
            <Navbar bg="" expand="lg" className="d-lg-none">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" onClick={handleToggleOffcanvas} />
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={handleToggleOffcanvas} placement="end" style={{ width: '50%' }}>
                <Offcanvas.Header closeButton>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Experience</Nav.Link>
                        <Nav.Link href="/">Projects</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Navigation;
