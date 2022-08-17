import { createContext, useState } from "react";

export const contexto = createContext(); //Aca va a "vivir" la data "global"
const { Provider } = contexto; //Es un componente que nos sirve para hacer "global" el valor del contexto desde su aparicion 


const CustomProvider = (props) => {

    /* let cantidad = 0; */
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        //carrito.push()
        //si estaEnCarrito() entonces...
        console.log("Soy el contexto!")
        console.log(producto)
        //cantidad = cantidad + producto.cantidad;
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        //retrun true/false
    }
    
    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;