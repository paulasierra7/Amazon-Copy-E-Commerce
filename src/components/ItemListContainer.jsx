import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {Spinner} from 'reactstrap';
import Banners from "./Banners"
import ItemList from "./ItemList"
import Page from "./Page"
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]) 
    const [productosFiltrados, setProductosFiltrados] = useState(productos)
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    useEffect(() => {
        if(!loading){
            if (category) {
                const filterProducts = productos?.filter(prod => prod?.category === category)
                setProductosFiltrados(filterProducts)
            }
            else setProductosFiltrados(productos)
        }
    }, [category, loading, productos])
    useEffect(() => {
        const productosCollection = collection(db, "products")
        const consulta = getDocs(productosCollection)

        consulta
            .then(snapshot => {
                const productos = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Banners/>
            {!loading && <Spinner/>
                ?
                <Page titulo="Catalogo" subtitulo="Todos los productos en un solo lugar" category="prod.category">
                    <ItemList productos={productosFiltrados}/>
                </Page>
                :
                <h1>.</h1> && <p>Estamos cargando tus productos...</p> && <Spinner/>
            }
        </>
    )
}

export default ItemListContainer




