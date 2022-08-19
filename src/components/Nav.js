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

                    <Link to ="/category/camisas">Camisas</Link>
                    <Link to ="/category/relojes">Relojes</Link>
                    <Link to ="/category/bufandas">Bufandas</Link>
                    <Link to ="/category/tenis">Zapatos</Link>
                    <Link to ="/category/bolsos">Bolsos</Link>
                    <Link to ="/cart">p{count}</Link>
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
