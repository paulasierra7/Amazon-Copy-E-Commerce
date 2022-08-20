import { createContext, useState } from "react";
import { useParams } from "react-router-dom";


export const contexto = createContext(); //Aca va a "vivir" la data "global"
const { Provider } = contexto; //Es un componente que nos sirve para hacer "global" el valor del contexto desde su aparicion 


const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCantidad(cantidad + producto.cantidad)
        carrito.push(producto.id)
    }
    
    const eliminarProducto = (producto) => {
        const vaciarCarrito = () => {
            setCantidad(cantidad - producto.id)
            setCarrito([])  
        }
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (producto) => {
        const siestaencarrito = carrito.find(producto => producto > producto.id);
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