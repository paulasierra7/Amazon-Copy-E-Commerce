// import Nav from "./Nav"
// import { Navbar, NavbarBrand } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                    {/* <Nav
                        type="header"
                    /> */}
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Tienda</Nav.Link>
                <Nav.Link href="#features">Carrito</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
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