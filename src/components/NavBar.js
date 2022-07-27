// import { Navbar, NavbarBrand } from "react-bootstrap"
// import Nav from "./Nav"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";


const Header = () => {

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src="./logo192.png"
                    style={{
                    height: 40,
                    width: 40
                    }}
                />    
                Mercado Rockstar
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#shop">Tienda</Nav.Link>
                <Nav.Link href="#cart">Carrito</Nav.Link>
                <CartWidget 
                />
                <Nav.Link href="#profile">Perfil</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
    }

export default Header;
