import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
// import { products } from '../productos';
// import { customFetch } from "./customFetch";
import { Spinner } from "reactstrap";
import { db } from "../firebase"
import { collection , getDoc , doc } from "firebase/firestore"
import ItemCount from "./ItemCount";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();


    useEffect(() => {

        const productosCollection = collection(db, "products")
        const referencia = doc(productosCollection,id) //DocumentReference
        const consulta = getDoc(referencia) //Promise

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





// import { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail"
// import { useParams } from "react-router-dom";
// import { products } from '../productos';
// import { customFetch } from "./customFetch";
// import { Spinner } from "reactstrap";

// const ItemDetailContainer = () => {

//     const [item, setItem] = useState({})
//     const [loading, setLoading] = useState(true)

//     const { id } = useParams()

//     useEffect(() => {
//         setLoading(true)
//         customFetch(products)
//             .then(res => {
//                 setLoading(false)
//                 setItem(res.find(item => item.id === parseInt(id)))
//             })
//     }, [])

//     return(
//         <>
//             {!loading ? <ItemDetail item={item} /> : <h1> Cargando...</h1>&& <Spinner/>}
//         </>
//     )
// }

// export default ItemDetailContainer
