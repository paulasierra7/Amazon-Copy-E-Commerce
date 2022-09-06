// import { useCarrito } from "./CustomProvider";
// import { db } from "../firebase"
// import { collection , getDoc , doc } from "firebase/firestore"
// // import {useParams } from "react-router-dom"

// const Cart = ({item}) => {

//     // const [nombre, setNombre] = useState("");
//     // const [apellido, setApellido] = useState("");
//     // const [usuarios, setUsuarios] = useState([]);
//     const { carrito, precioTotal, eliminarProducto, vaciarCarrito } = useCarrito()
//     const productosCollection = collection(db, "products")
//     const referencia = doc(productosCollection,id) //DocumentReference
//     const consulta = getDoc(referencia) //Promise
//     // const { id } = useParams();
//     // const {id} = item

//     console.log(carrito)
//     return (
//         <section>
//             <h2>Carrito</h2>
//             {carrito.map(item => (
//                 <article key={item.id}>
//                     <img src="(prod.image}" alt="" />
//                     <h4>{item.product}</h4>
//                     <h4>Cantidad{item.cantidad}</h4>
//                     <button onClick={() => eliminarProducto(item.id)}>X</button>
//                     <div>
//                     <h3>Total: ${precioTotal()}</h3>
//                     <button onClick={() => vaciarCarrito(item.id)}>Vaciar carrito</button>
//                     </div>
//                 </article>
//             ))}
//         </section>
//     )
// }
        
// export default Cart


// import { useState } from "react"
// import List from "./List";
// import Page from "./Page"
// import { db } from "../firebase"
// import { collection, addDoc , serverTimestamp } from "firebase/firestore"
// import { useCarrito } from "./CustomProvider";
// import { toast } from "react-toastify";


// const Cart = () => {

//     const [nombre, setNombre] = useState("");
//     const [apellido, setApellido] = useState("");
//     const [usuarios, setUsuarios] = useState([]);
//     const { carrito, precioTotal } = useCarrito()

//   //Variables/Valores precomputados
//     const nombreCompleto = `${nombre} ${apellido}`;
//     const handleChangeNombre = (e) => {
//         e.preventDefault()
//         const input = e.target
//         const value = input.value
//         setNombre(value)
//     }
//     const handleChangeApellido = (e) => {
//         const input = e.target
//         const value = input.value
//         setApellido(value)
//     }

//     const handleConfirm = () => {

//         const orden = {
//         items: carrito,
//         total : 300,
//         buyer : {
//             name : "Juan Perez",
//             phone : "123456789",
//             email : "email@mail.com"
//         },
//         date : serverTimestamp()
//         }

//         const ordersCollection = collection(db, "orders")
//         const consulta = addDoc(ordersCollection, orden)

//         consulta
//         .then((res)=>{
//             toast.success(`Felicitaciones. Tu orden ${res.id} creada con exito!`)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }

//     return (
//         <Page titulo="Carrito" subtitulo="Compra y vende">
//         <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
//         <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />

//         <button onClick={handleConfirm}>guardar</button>

//         <List usuarios={usuarios} />

//         </Page>
//     )
//     }
// export default Cart




