import { NavLink } from "react-router-dom"
import '../estilos.css';
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {

    const { carrito } = useCarrito()
    const allItems = carrito?.length > 0 ? carrito?.reduce((acc, item) => acc + item?.cantidad, 0) : 0;

    return (
        <NavLink to ="/cart/" className ="cartIcon" >
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {allItems}
        </NavLink >
    )
}
export default CartWidget