import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import CartWidget from "./CartWidget"
import {
Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


const BarraNav = ({ type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    if(type === "header"){
        return (
            <nav>
                <div
                style={{
                    display: 'block', width: 550, padding: 30
                }}>
                    <Navbar 
                        fixed="top" 
                        color="dark"
                        dark 
                        expand="md"
                    >
                        <NavbarBrand>
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
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink className="tabNav" to ="/category/tenis">Sneakers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="tabNav" to ="/category/electronics">Electronics</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="tabNav" to ="/category/apparel">Apparel</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="tabNav" to ="/category/sandals">Sandals</NavLink>
                            </NavItem>
                            <NavItem>
                                <CartWidget/>
                            </NavItem>
                            <NavItem>
                                <NavLink className="tabNav" to ="/perfil/">Perfil</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            {/* <DropdownToggle nav caret>
                                Options
                            </DropdownToggle> */}
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        </Collapse>
                    </Navbar>
                    </div>

                {/* <Navbar fixed="top" bg="dark" variant="dark" dark expand="md" >
                    <NavbarBrand href="/">
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
                        </NavbarBrand>

                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <Container className="justify-content-end">
                                    <NavItem>
                                        <NavLink className="tabNav" to ="/category/tenis">Sneakers</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="tabNav" to ="/category/tenis">Sneakers</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="tabNav" to ="/category/electronics">Electronics</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="tabNav" to ="/category/apparel">Apparel</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="tabNav" to ="/category/sandals">Sandals</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <CartWidget/>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="tabNav" to ="/perfil/">Perfil</NavLink>
                                    </NavItem>
                                </Container>
                            </Nav>
                        </Collapse>
                    </Navbar> */}
            </nav>
        )
    } else {
        return (
            <nav>
            <Navbar bg="dark" variant="dark"  className="BarraNav">
                <Container className="justify-content-end">
                    <Link className="tabNav" to ="/perfil/">Perfil</Link>
                </Container>
            </Navbar>
            </nav>
        )
    }
}

export default BarraNav

