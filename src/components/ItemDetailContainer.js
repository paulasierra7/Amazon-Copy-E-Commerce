import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { products } from '../productos';
import { customFetch } from "./customFetch";
import { Spinner } from "reactstrap";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setItem(res.find(item => item.id === parseInt(id)))
            })
    }, [])

    return(
        <>
            {!loading ? <ItemDetail item={item} /> : <h1> Cargando...</h1>&& <Spinner/>}
        </>
    )
}

export default ItemDetailContainer

// useEffect(() => {
//             setLoading(true)
//             const pedido = fetch(products + id)
    
//             pedido
//                 .then((respuesta) => {
//                     return respuesta.json()
//                 })
//                 .then((respuesta) => {
//                     setItem(respuesta)
//                 })
//                 .catch(error => console.log(error))
    
//         }, [id])
    
    
//         return (
//             <>
//                 <div className='container'>
//                     <ItemDetail item={item} />
//                 </div>
//             </>
//         );
//     }
