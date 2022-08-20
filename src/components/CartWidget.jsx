import { NavLink } from "react-router-dom"
import '../estilos.css';
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {

    const { cantidad } = useCarrito()
    
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