import { useContext, createContext, useState } from "react";

export const contexto = createContext(); 
const { Provider } = contexto; 

export const useCarrito = () => {
    const valor_del_contexto = useContext(contexto)
    return valor_del_contexto
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    const isInCart = (id) => {
        return carrito.some(x => x.id === id)
        console.log("Esta en carrito")
    }

    const addItem = (id, cantidad) => {

        const newItem = {
            ...id,
            cantidad
        }

        if (isInCart(newItem.id)){
            const findProduct = carrito.find(x => x.id === newItem.id)
            const productIndex = carrito.indexOf(findProduct)
            const auxArray = [...carrito]
            auxArray[productIndex].cantidad += cantidad
            setCarrito([...carrito,newItem])
            console.log("Esta en carrito addItem")


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
        return setCarrito(carrito.filter(x => x.id !== id))
        
    }

    const getItemQty = () => {
        return carrito.reduce((acc, x) => acc += x.cantidad, 0)
    }

    const getItemPrice = () => {
        return carrito.reduce((acc, x) => acc += x.cantidad * x.price, 0)
    }


    
    
    const valorDelContexto = {
        cantidad: parseInt(cantidad),
        carrito : carrito,
        addItem,
        deleteItem,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;