import { Navbar, Container, Nav } from "react-bootstrap"
import './index.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" fixed="top" >
            <Container fluid>
                <Navbar.Brand href="/">
                <img src="https://res.cloudinary.com/dsolw4c9p/image/upload/c_thumb,w_200,g_face/v1739467264/TM_LOGO_enmfrd.png" alt="Tm Roldan srl"
                style={{height: '50px'}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/" className="text-white">Inicio</Nav.Link>
                        <Nav.Link href="/horometro" className="text-white">Horometros</Nav.Link>
                        <Nav.Link href="/repuestos" className="text-white">Depósitos</Nav.Link>
                        <Nav.Link href="/torneria" className="text-white">Torneria</Nav.Link>
                        <Nav.Link href="/pendientes" className="text-white">Pendientes</Nav.Link>
                        <Nav.Link href="/estadisticas" className="text-white">Campaña</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/siginin" className="text-white">Inicia Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
     
export default NavBar

