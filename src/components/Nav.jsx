import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"

const BarraNav = ({ type,count }) => {

    if(type === "header"){
        return (
            <nav>
            <Navbar fixed="top" bg="dark" variant="dark" >
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
                    {/* <div className="BarraNav"> */}
                    <Link className="sneakersNav" to ="/category/tenis">Sneakers</Link>
                    <Link className="electronicsNav" to ="/category/electronics">Electronics</Link>
                    <Link className="apparelNav" to ="/category/apparel">Apparel</Link>
                    <Link className="sandalsNav" to ="/category/sandals">Sandals</Link>
                    <CartWidget/>
                    <Link className="perfilNav" to ="/perfil/">Perfil</Link>
                    {/* </div> */}
                </Container>
            </Navbar>
            </nav>
        )
    } else {
        return (
            <nav>
            <Navbar  fixed="bottom" bg="dark" variant="dark"  className="BarraNav">
                <Container className="justify-content-end">
                    <Link className="perfilNav" to ="/perfil/">Perfil</Link>
                </Container>
            </Navbar>
            </nav>
        )
    }
}

export default BarraNav
