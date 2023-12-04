'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Meu Projeto</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Recursos</Nav.Link>
                    <Nav.Link href="#pricing">Preços</Nav.Link>
                </Nav>
            </Navbar>
            <Button variant="primary">Botão</Button>
        </div>
    );
}

export default App;

