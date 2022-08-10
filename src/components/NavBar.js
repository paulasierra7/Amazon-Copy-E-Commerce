import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap"

const Header = () => {

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavbarBrand href="#home">
                <img
                    alt="logo"
                    src="./logo192.png"
                    style={{
                    height: 40,
                    width: 40
                    }}
                />    
                Mercado Rockstar
            </NavbarBrand>
            <Nav>
                <Nav.Link href="#shop">Tienda</Nav.Link>
                <Nav.Link href="#cart">Carrito</Nav.Link>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <Nav.Link href="#profile">Perfil</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
    }

export default Header;
