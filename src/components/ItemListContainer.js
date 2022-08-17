import '../estilos.css';
import ItemList from './ItemList';
import { Spinner } from 'reactstrap';
import Item from './ItemList'
import { customFetch } from './customFetch';
import { useEffect, useState } from 'react'
import { products } from '../productos';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const { productoid } = useParams()


    useEffect (() => {
        customFetch(products)
            .then(data => {
                setLoading(true)
                })

    },[])

    return (
        <>
        { !loading && <Spinner /> }
        <ItemList />
        <ItemDetailContainer/>
        </>
    )
}

export default ItemListContainer
