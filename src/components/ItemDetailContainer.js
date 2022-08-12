import {useState, useEffect } from 'react'
import { products } from '../productos'
import { customFetch } from './customFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({}) 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        customFetch({products})
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.index === 1))})
    }, [])

    return (
        <>
            {!loading ? <ItemDetail listProduct ={listProduct}/> : <p>Cargando...</p>}
            <div>ItemDetailContainer</div>
        </>
    )
}

export default ItemDetailContainer