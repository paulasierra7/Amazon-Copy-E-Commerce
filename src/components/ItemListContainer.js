import '../estilos.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { products } from '../productos';
import { Spinner } from 'reactstrap';
import { customFetch } from './customFetch';
import Page from "./Page"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setProductos(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setProductos(res)
                }
            })
        }, [category])

        return(
            <>
                {!loading && <Spinner />
                ?
            <Page titulo="."  subtitulo="Todos los productos en un solo lugar">
            <ItemList productos={productos} />
            </Page>
            :
            <h1>.</h1>&&<p>Estamos cargando tus productos...</p> && <Spinner />
            }
            {/* <ItemCount initial={1} stock={5} onAdd={() => {}}/> */}
        </>
    )  
}
export default ItemListContainer
