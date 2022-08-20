import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import BarraNav from "./Nav";

const Header = () => {

    return (
            <Navbar>
                <BarraNav 
                    type="header"
                    className="BarraNav"
                />
            </Navbar>
        )
    }

export default Header
