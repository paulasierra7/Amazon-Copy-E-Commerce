import { createContext, useContext, useState } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    return useContext(contexto)
}

const CustomProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const estaEnCarrito = (id) => carrito.find(producto => producto.id === id)

    const agregarProducto = (item, cantidad) => {
        if (estaEnCarrito(item.id)) {
            const nuevoCarrito = carrito.map(producto => {
                if (producto.id === item.id) {
                    const nuevaCantidad = producto.cantidad + cantidad
                    const newStock = producto?.stock - cantidad
                    return {...producto, cantidad: nuevaCantidad, stock: newStock}
                } else {
                    return producto
                }
            })
            setCarrito(nuevoCarrito)
        } else {
            const nuevoProducto = {...item, cantidad: cantidad}
            setCarrito([...carrito, nuevoProducto])
        }
    }

    const eliminarProducto = (id) => setCarrito(carrito.filter(prod => prod.id !== id))

    const vaciarCarrito = () => setCarrito([])

    const precioTotal = () => {
        return carrito.reduce((acc,item) => acc += item.price * item.cantidad, 0)
    }

    const cantidadTotal = () => {
        return carrito.reduce((acc, product) => acc += product.cantidad, 0)
    }

    const valorDelContexto = {
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        estaEnCarrito,
        precioTotal,
        cantidadTotal
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider;