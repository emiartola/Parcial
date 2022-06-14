import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export const Navigation = () => {
    return (
        <>
        <Navbar bg="secondary" variant="dark">
            
            <Nav className="mr-auto">
                <Nav.Link href="/agenda"> Agenda de Contactos x Indice  </Nav.Link>
                <Nav.Link href="/tabla"> Tabla </Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}