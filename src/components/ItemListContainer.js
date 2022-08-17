import '../estilos.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { customFetch } from './customFetch';
import { products } from '../productos';
import { Spinner } from 'reactstrap';
import CustomLoader from "./CustomLoader"
import Page from "./Page"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 3000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

        pedido.catch((error) => {
            console.log("Termino el pedido mal")
        })

    }, [])


    // if (loading) {
    //     return (
    //         <CustomLoader />
    //     )
    // } else {
        return (
            <Page titulo="Catalogo" subtitulo="Todos los productos en un solo lugar">
            {/* {loading && <Spinner />} 
            {!loading && }*/}
            <ItemList productos={productos} />
            </Page>
        )
    }

export default ItemListContainer