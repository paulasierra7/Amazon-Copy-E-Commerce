import '../estilos.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { products } from '../productos';
import { Spinner } from 'reactstrap';
import { customFetch } from './customFetch';
import Page from "./Page"
import ItemCount from './ItemCount';
import Banners from "./Banners"
import { db } from "../firebase" // a) me traigo la referencia de la DB
import { collection, getDocs, query, where  } from "firebase/firestore"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const productosCollection = collection(db, "products")
        // const filtro = query(productosCollection, where("category","==", id))
        // console.log(filtro)
        const consulta = getDocs(productosCollection)

        consulta
        .then(snapshot=>{
            //console.log(snapshot.docs)
            const productos = snapshot.docs.map(doc=>{
                /* const producto_final_con_id = {
                    ...doc.data()
                }
                producto_final_con_id.id = doc.id
                return producto_final_con_id */
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProductos(productos)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])


    //     consulta
    //     .then(snapshot=>{
    //         const productos = snapshot.docs.map(doc=>{
    //             return {
    //                 ...doc.data(),
    //                 id: doc.id
    //             }
    //         })
    //         setProductos(products)
    //         setLoading(false)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }, [id])

        // setLoading(true)
        // customFetch(products)
        //     .then(res => {
        //         if (category) {
        //             setLoading(false)
        //             setProductos(res.filter(prod => prod.category === category))
        //         } else {
        //             setLoading(false)
        //             setProductos(res)
        //         }
        //     })
        // }, [category])

        return(
            <>
            <Banners/>
                {!loading && <Spinner />
                ?
            <Page titulo="Catalogo"  subtitulo="Todos los productos en un solo lugar" category="prod.category">
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
