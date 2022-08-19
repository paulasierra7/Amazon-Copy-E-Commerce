import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"

const BarraNav = ({ type,count }) => {

    if(type === "header"){
        return (
            <nav>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Link to="/">
                    <img
                        alt="logo"
                        src="./amazon.png"
                        style={{
                        height: 40,
                        width: 140
                        }}
                    />     
                </Link>

                <Container className="justify-content-end">

                    <Link to ="/category/tenis">Sneakers</Link>
                    <Link to ="/category/electronics">Electronics</Link>
                    <Link to ="/category/apparel">Apparel</Link>
                    <Link to ="/category/sandals">Sandals</Link>
                    <Link to ="/cart">Carrito{count}</Link>
                    <CartWidget/>

                    <Link to ="/perfil/">Perfil</Link>
                </Container>
            </Navbar>
            </nav>
        )
    } else {
        return (
            <nav>
            <Navbar  fixed="bottom" bg="dark" variant="dark">
                <Container className="justify-content-end">
                    <Link to ="/perfil/">Perfil</Link>
                </Container>
            </Navbar>
            </nav>
        )
    }
}

export default BarraNav
