import { useContext, createContext, useState } from "react";


const contexto = createContext(); 
const { Provider } = contexto; 

export const useCarrito = () => {
    const valor_del_contexto = useContext(contexto)
    return valor_del_contexto
}

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
        cantidad: parseInt(cantidad),
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