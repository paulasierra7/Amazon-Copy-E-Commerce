import {useState, useEffect } from 'react'
import { products } from '../productos'
import { customFetch } from './customFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [listProduct, setListProduct] = useState({}) 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
            fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
                .then(res=>res.json())
                .then(lista=>{
                        setLoading(false)
                        setListProduct(lista[0])
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