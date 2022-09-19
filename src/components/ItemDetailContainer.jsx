import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import { db } from "../firebase"
import { collection , getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();


    useEffect(() => {

        const productosCollection = collection(db, "products")
        const referencia = doc(productosCollection,id) 
        const consulta = getDoc(referencia) 

        consulta
        .then((res)=>{
            setItem(res.data())
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    return(
        <>
            {!loading ? <ItemDetail item={item} /> : <h1> Cargando...</h1>&& <Spinner/> }
        </>
    )
}

export default ItemDetailContainer