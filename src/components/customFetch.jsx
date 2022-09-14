// import { products } from "../products"
// import { collection, getDocs , query , where } from "firebase/firestore"
// import { db } from "../firebase"

// export const customFetch = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 2000)
//     })
// }


//--------


// setLoading(true)
// consulta
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

//___________

// useEffect(() => {
//     setLoading(true)
//     customFetch(products)
//         .then(res => {
//             if (category) {
//                 setLoading(false)
//                 setProductos(res.filter(prod => prod.category === category))
//             } else { 
//                 setLoading(false)
//                 setProductos(res)
//             }
//         })
// }, [category])