import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import { Spinner } from 'reactstrap';
import Banners from "./Banners"
import ItemList from "./ItemList"
import Page from "./Page"
import { collection, getDocs , query , where } from "firebase/firestore"
import { db } from "../firebase"
import {toast} from "react-toastify"
import { customFetch } from "./customFetch";

//contenedor que resuelve la promesa - se la pasa a item list - y el item lo renderiza. 

const ItemListContainer = ({props}) => {

    const [productos, setProductos] = useState([]) //este es listProduct
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const { category } = useParams()


    useEffect(() => {
        if(!id){
            const productosCollection = collection(db, "products")
            const consulta = getDocs(productosCollection)

            consulta
            .then(snapshot=>{
                const productos = snapshot.docs.map(doc=>{
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
        } else {
            const productosCollection = collection(db, "products")
            const filtro = query(productosCollection,
                where("category","==",id),
                where("stock",">",10))
            const consulta = getDocs(filtro)

            consulta
            .then(snapshot=>{
                const productos = snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err=>{
                toast.error("Error al cargar los productos")
            })
        }
    }, [id])




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
                </>
            )  
        }
        
export default ItemListContainer




