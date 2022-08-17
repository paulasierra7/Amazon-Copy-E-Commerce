import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"

const BarraNav = ({ type }) => {

    if(type === "header"){
        return (
            <nav>
            <Navbar fixed="top" bg="dark" variant="dark">
            <Link to="/">
                <img
                    alt="logo"
                    src="./pokemonLogo.png"
                    style={{
                    height: 40,
                    width: 140
                    }}
                />    
            </Link>
            <Container className="justify-content-end">
            
                <Link to ="/category/:productoid">Categoria 1</Link>
                <Link to ="/category/:productoid">Categoria 2</Link>
                <Link to ="/carrito/">Carrito</Link>
                <Link to ="/carrito/">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </Link>
                <Link to ="/perfil/">Perfil</Link>
                </Container>
            </Navbar>
            </nav>
        )
    } else {
        return (
            <nav>
            <Navbar  bg="dark" variant="dark">
                <Container className="justify-content-end">
                <Link to ="/perfil/">Perfil</Link>
                </Container>
            </Navbar>
            </nav>
        )
    }
}

export default BarraNav
