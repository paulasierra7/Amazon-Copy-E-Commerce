import { Navbar } from "react-bootstrap"
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
