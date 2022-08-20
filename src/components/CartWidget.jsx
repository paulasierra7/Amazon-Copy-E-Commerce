import { NavLink } from "react-router-dom"
import '../estilos.css';
import { useContext } from "react"
import { contexto } from "./CustomProvider";

const CartWidget = () => {

    const { cantidad } = useContext(contexto)
    
    return (
        <NavLink to ="/cart/" className ="cartIcon" >
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {cantidad}
        </NavLink >
    )
}
export default CartWidget