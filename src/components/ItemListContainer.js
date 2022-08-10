import '../estilos.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { customFetch } from './customFetch';
import { products } from '../productos';
import { Spinner } from 'reactstrap';


const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        customFetch(products)
            .then(data => {
                setLoading(true)
                setListProducts(data)})

    },[])

    return (
        <>
            { !loading && <Spinner /> }
            { loading && <ItemList listProducts = {listProducts} /> }
        </>
    )
}

export default ItemListContainer





// const ItemListContainer = () => {

//     const [productos, setProductos] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(()=>{
//         console.log("Arranca el pedido")

//         const pedido = new Promise ((res,rej) =>{
//             setTimeout(()=>{
//                 res()
//             },2000)
//         })

//         pedido.then((resultado)=>{
//             console.log("Termino el pedido bien")
//             console.log({resultado})
//             setProductos(resultado)
//             setLoading(false)
//         })
//         pedido.catch((error)=>{
//             console.log("Termino el pedido mal")
//         })
//         pedido.finally(()=>{
//             console.log("Termino el pedido")
//         })
//     },[])

//     if(loading){
//         return(
//             <p>Cargando...</p>
//         )
//     }else{
//         return (
//             <ItemList productos={productos}/>
//         )
//     }

//     // return(
//     //     <>
//     //     <h2>Hola</h2>
//     //     <ItemCount/>
//     //     <ItemList/>
//     //     </>
//     // )
// }

// export default ItemListContainer