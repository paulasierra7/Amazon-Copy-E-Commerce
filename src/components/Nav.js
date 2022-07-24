const Nav = (parametros) => {

    if(parametros.type == "header"){
        return (
            <Nav>
                <Nav.Link href="#home">Tienda</Nav.Link>
                <Nav.Link href="#features">Carrito</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
        )
    } else {
        return (
            <nav>
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
        )
    }
}

export default Nav

