import { useState } from "react"
import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import '../estilos.css';
// import { contexto } from "./CustomProvider"

const CartWidget = () => {

    // const { cantidad } = useContext(contexto)

    return (
        <NavLink  to ="/carrito/">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {/* {cantidad} */}
        </NavLink >
    )
}
export default CartWidget


// const CartWidget = ({contadorInicial, aumentarContador, resetearContador, disminuirContador}) => {
    
//     return (
//         <>
//         <div className='cartWidget-Container'>
//         {/* <p className="cartWidget-cantidad">
//             {/* contador: {contadorInicial} 
//         </p> */}
//         </div>
//         </>
//     )
// }

// export default CartWidget