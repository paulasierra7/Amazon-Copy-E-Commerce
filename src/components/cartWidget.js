import { NavLink } from "react-router-dom"
import '../estilos.css';

const CartWidget = () => {

    return (
        <NavLink  className ="cartIcon" to ="/cart/">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
        </NavLink >
    )
}
export default CartWidget