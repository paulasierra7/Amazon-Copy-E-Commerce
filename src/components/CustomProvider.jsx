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
    const [precioTotal, setPrecioTotal] = useState(0);

    const isInCart = (producto) => {
        return carrito.some(x => x.id === id)
    }

    const addItem = (producto, stock) => {

        const newItem = {
            ...producto,
            qty
        }

        if (isInCart(newItem.id)){
            const findProduct = carrito.find(x => x.id === newItem.id)
            const productIndex = carrito.indexOf(findProduct)
            const auxArray = [...carrito]
            auxArray[productIndex].qty += qty
            setCart([...carrito,newItem])

        }else{
            setCarrito([...carrito, newItem])
        }
    }
    
    const emptyCart = () => {
        const vaciarCarrito = () => {
            return setCarrito([])  
        }
    }

    const deleteItem = (id) => {
        return setCart(carrito.filter(x => x.id !== id))
    }

    const getItemQty = () => {
        return carrito.reduce((acc, x) => acc += x.qty, 0)
    }

    const getItemPrice = () => {
        return carrito.reduce((acc, x) => acc += x.qty * x.price, 0)
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