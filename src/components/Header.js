import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import BarraNav from "./Nav";

const Header = () => {

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Link to="/home/">
                <img
                    alt="logo"
                    src="./pokemonLogo.png"
                    style={{
                    height: 40,
                    width: 140
                    }}
                />    
            </Link>
            <BarraNav 
                type="header"
                className="BarraNav"
            />
            </Container>
        </Navbar>
        </>
    );
    }

export default Header;
