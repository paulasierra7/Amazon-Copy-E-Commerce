// import { Navbar, NavbarBrand } from "react-bootstrap"
// import Nav from "./Nav"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./cartWidget";

function Header() {
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
                    cantidad = {2} 
                    precio = {5.30}
                />
                <Nav.Link href="#profile">Perfil</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
    }

export default Header;

{/*  */}

// const Header = () => { 
//     return (
//         <Navbar
//             className="my-2"
//             color="dark"
//             dark
//         >
//             <NavbarBrand href="/">
//             <img
//                 alt="logo"
//                 src="./logo192.png"
//                 style={{
//                 height: 40,
//                 width: 40
//                 }}
//             />            
//             Ecommerce Mercado Libre
//                 <Nav
//                     type="header"
//                 />
//             </NavbarBrand>
//         </Navbar>   
//     )
// }


// export default Header