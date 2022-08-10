import Nav from "./Nav"

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__titulo" >Titlo</h1>
            <img className="header__image" src="/logo192.png" />
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <Nav type="header"/>
        </header>
    )
}

export default Header