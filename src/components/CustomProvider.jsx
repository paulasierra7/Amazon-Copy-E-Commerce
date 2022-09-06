import { createContext, useContext, useState } from "react";
const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    return useContext(contexto)
}

const CustomProvider = (props) => {


    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    // const [precioTotal, setPrecioTotal] = useState(0);

    const estaEnCarrito = (id) => carrito.find(producto => producto.id === id)

    const agregarProducto = (producto) => {
        setCantidad(cantidad + producto.cantidad)
        precioTotal(producto.cantidad * producto.price)
        carrito.push(producto.id)
    }

    // const agregarProducto = (item, producto) => {
    //     if (estaEnCarrito(item.id)) {
    //         const nuevoCarrito = carrito.map(producto => {
    //             if (producto.id === item.id) {
    //                 const nuevaCantidad = producto.cantidad + cantidad
    //                 return {...producto, cantidad: nuevaCantidad}
    //             } else {
    //                 return producto
    //             }
    //         }) 
    //         setCarrito(nuevoCarrito)
    //     } else { 
    //         const nuevoProducto = {...item, cantidad: cantidad}
    //         setCarrito([...carrito, nuevoProducto])
    //     }
    // }

    const eliminarProducto = (id) => setCarrito(carrito.filter(prod => prod.id !== id))

    const vaciarCarrito = () => setCarrito([])

    const precioTotal = () => { 
        return carrito.reduce((acc, product) => acc += (product.price * product.cantidad, 0))
    }

    const cantidadTotal = () => { 
        return carrito.reduce((acc,product) => acc += product.cantidad, 0)
    }
    
    const valorDelContexto = {
        cantidad: parseInt(cantidad),
        carrito : carrito,
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






// import { createContext, useState, useContext } from "react";

// const CartContext = createContext([])
// export const useCarrito = () => useContext(CartContext)

// export function CustomProvider({children}){
//     const [ cartList, setCartList ] = useState([])

//     const isInCart = (id) => cartList.find(prod => prod.id === id)

//     const addToCart = (item, quantity) => {
//         if (isInCart(item.id)){
//             const newCart = cartList.map(prod => {
//                 if (prod.id === item.id){
//                     const newQuantity = prod.quantity + quantity
//                     return {...prod, quantity:newQuantity}
//                 } else {
//                     return prod
//                 }
//             })
//             setCartList(newCart)
//         } else {
//             const newProduct = {...item, quantity: quantity}
//             setCartList([...cartList, newProduct])
//         }
//     }

//     const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !=id))

//     const cleanCart = () => setCartList([])

//     const totalPrice = () => {
//         return cartList.reduce((acc, product) => acc += (product.price * product.quantity))
//     }

//     const totalQuantity = () => {
//         return cartList.reduce((acc, product) => acc += product.quantity,0)
//     }

//     return(
//         <CustomProvider value={{
//             addToCart,
//             removeProduct,
//             cleanCart,
//             totalPrice,
//             totalQuantity,
//             cartList
//         }}>
//             {children}
//         </CustomProvider>
//     )
// }

// export default CustomProvider;



// import { useContext, createContext, useState } from "react";

// //Contexto para poder usar este prop en todos
// export const contexto = createContext(); //aca vive data global
// const { Provider } = contexto; //este hace global el valor del contexto

// //Hook para usar el contexto en vez de usar props. 
// export const useCarrito = () => {
//     return useContext(contexto)
// }

// const CustomProvider = (props) => {

//     const [cantidad, setCantidad] = useState(0);
//     const [carrito, setCarrito] = useState([]);
//     const [precioTotal, setPrecioTotal] = useState(0);

//     const isInCart = (id) => {
//         return carrito.some(x => x.id === id)
//         console.log("Esta en carrito")
//     }

//     const addItem = (id, cantidad) => {

//         const newItem = {
//             ...id,
//             cantidad
//         }

//         if (isInCart(newItem.id)){
//             const findProduct = carrito.find(x => x.id === newItem.id)
//             const productIndex = carrito.indexOf(findProduct)
//             const auxArray = [...carrito]
//             auxArray[productIndex].cantidad += cantidad
//             setCarrito([...carrito,newItem])
//             console.log("Esta en carrito addItem")


//         }else{
//             setCarrito([...carrito, newItem])
//         }
//     }
    
//     const emptyCart = () => {
//         const vaciarCarrito = () => {
//             return setCarrito([])  
//         }
//     }

//     const deleteItem = (id) => {
//         return setCarrito(carrito.filter(x => x.id !== id))
        
//     }

//     const getItemQty = () => {
//         return carrito.reduce((acc, x) => acc += x.cantidad, 0)
//     }

//     const getItemPrice = () => {
//         return carrito.reduce((acc, x) => acc += x.cantidad * x.price, 0)
//     }

    
    
//     const valorDelContexto = {
//         cantidad: parseInt(cantidad),
//         carrito : carrito,
//         addItem,
//         deleteItem,
//     }

//     return(
//         <Provider value={valorDelContexto}>
//             {props.children}
//         </Provider>
//     )
// }


// export default CustomProvider;







// import { useContext, createContext, useState } from "react";

// const contexto = createContext(); 
// const { Provider } = contexto; 

// export const useCarrito = () => {
//     return useContext(contexto)
// }

// const CustomProvider = (props) => {

//     const [cantidad, setCantidad] = useState(0);
//     const [carrito, setCarrito] = useState([
//         {
//             id: 1,
//             nombre: "producto",
//             precio: 100

//         }
//     ]);
//     const [precioTotal, setPrecioTotal] = useState(0);

//     const agregarProducto = (producto) => {
//         console.log(producto)
//         setCantidad(cantidad + producto.cantidad)
//         setPrecioTotal(producto.cantidad * producto.price)
//         carrito.push(producto.id)
//     }

//     const eliminarProducto = (producto) => {
//         const vaciarCarrito = () => {
//             setCantidad(cantidad - producto.id)
//             setCarrito([])  
//         }
//     }
//     const vaciarCarrito = () => {
//         setCarrito([])
//     }
//     const estaEnCarrito = (producto) => {
//         const siestaencarrito = carrito.find(producto => producto > producto.id);
//     }
    
//     const valorDelContexto = {
//         cantidad: parseInt(cantidad),
//         carrito : carrito,
//         agregarProducto,
//         eliminarProducto,
//     }
//     return(
//         <Provider value={valorDelContexto}>
//             {props.children}
//         </Provider>
//     )
// }
// export default CustomProvider;


// import { createContext, useContext, useState } from "react";
// const contexto = createContext();
// const { Provider } = contexto;
// export const useCarrito = () => {
//     const valor_del_contexto = useContext(contexto)
//     return valor_del_contexto
// }
// const CustomProvider = (props) => {

//     const [cantidad, setCantidad] = useState(0);
//     const [carrito, setCarrito] = useState([
//         {
//             id: 1,
//             nombre: "Producto 1",
//             precio: 100
//         }
//     ]);
//     const [precioTotal, setPrecioTotal] = useState(0);

//     const agregarProducto = (producto) => {
//         console.log("Soy el contexto!")
//         console.log(producto)
//         setCantidad(cantidad + producto.cantidad)
//         //setPrecioTotal()
//     }

//     const eliminarProducto = () => { }
//     const vaciarCarrito = () => {
//         setCarrito([])
//     }
//     const estaEnCarrito = (id) => { }
//     const valorDelContexto = {
//         cantidad: cantidad,
//         carrito: carrito,
//         setCantidad,
//         setCarrito
//     }
//     return (
//         <Provider value={valorDelContexto}>
//             {props.children}
//         </Provider>
//     )
// }
// export default CustomProvider;

