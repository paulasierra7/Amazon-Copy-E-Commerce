import {useState, useEffect } from 'react'
import { products } from '../productos'
import { customFetch } from './customFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [listProduct, setListProduct] = useState({}) 
    const [loading, setLoading] = useState(false)
    // const [ EstadoLista, setEstadoLista ] = useState([])

    useEffect(() => {
        setLoading(true)
            fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
                .then(res=>res.json())
                .then(lista=>{
                    let listanueva = lista.map(a=>{
                            return {identidifadorId:a.id,descripcion:a.description}} )
                        setLoading(false)
                        setListProduct(listanueva)
                });
        }, [])

    return (
        <>
            {!loading ? <ItemDetail listProduct ={listProduct}/> : <p>Cargando...</p>}
            <div>ItemDetailContainer</div>
        </>
    )
}

export default ItemDetailContainer

// useEffect(() => {
//     setLoading(true)
//     customFetch({products})
//         .then(res => {
//             setLoading(false)
//             setListProduct(res.find(item => item.index === 1))})
// }, [])

// const [ EstadoLista, setEstadoLista ] = useState([])

// fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(lista=>{
//                 let listanueva = lista.map(a=>{
//                     return {identidifadorId:a.id,descripcion:a.description}} )
//                 setEstadoLista(listanueva)
//             });

