import '../estilos.css';
import ItemList from './ItemList';
import { Spinner } from 'reactstrap';
import Item from './ItemList'
import { customFetch } from './customFetch';
import { useEffect, useState } from 'react'
import { products } from '../productos';


const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    // const [productos, setProductos] = useState([])

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
        <Item />
        </>
    )
}

export default ItemListContainer
