import React from 'react'
import { useRef } from 'react'
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div className='backdrop-blur-sm bg-white/30 mb-2'>
            <Container id='home'>
                <Navbar bg="trasparent" variant="dark" className='mainNavbar'>
                    <Container>
                        <Navbar.Brand className="brand font-weight-bold" href="/">Drm_DevJr</Navbar.Brand>
                        <Nav className="me-center font-size-5px">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutme">Tentang Saya</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#skill">Skill</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#contact">Kontak</Nav.Link>
                        </Nav>

                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavigationBar


