// import { useState } from "react"
// import Page from "./Page"
// import List from "./List";
// import React, { useContext } from 'react';
// import { contexto, useCarrito } from './CustomProvider'

// const Cart = () => {

//     const { carrito } = useContext(useCarrito);

//     if (carrito.length > 0) {
//         return(
//             <div>
//                 {
//                     carrito.map((element, index) => {
//                         return <div key={index}>
//                             <div>
//                                 <img src={element.pictureURL} alt ={element.name}></img>
//                             </div>
//                             <div>
//                                 <h3>{element.name}</h3>
//                                 <h2>Precio: $ {element.price}</h2>
//                                 <h3>Unidades: </h3>
//                             </div>
//                             <div className="btn btn-danger">
//                                 Delete
//                             </div>
//                         </div>
//                     })
//                 }
//             </div>
//         )
//     }

//     return (
//         <Page titulo ="Carrito" subtitulo="Compra y vende">

//             {/* <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>
//             <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/> */}

//             {/* <button onClick={handleConfirm}>guardar</button> */}
//             <button >guardar</button>

//             {/* <List usuarios={usuarios}/> */}
//             <List/>

//         </Page>
//     )
// }

// export default Cart 

import { useState } from "react"
import Page from "./Page"

import List from "./List";

const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuarios, setUsuarios] = useState([]);


    const handleChangeNombre = (e) => {
        const input = e.target
        const value = input.value
        setNombre(value)
    }

    const handleChangeApellido = (e) => {
        const input = e.target
        const value = input.value
        setApellido(value) 
    }

    const handleConfirm = () => {
        const usuario = {nombre, apellido}
        const usuarios_copia = [...usuarios]
        usuarios_copia.push(usuario)
        setUsuarios(usuarios_copia)
    }


    return (
        <Page titulo ="Carrito" subtitulo="Compra y vende">
            {/*<p id="parrafo">El Contador va : {estadoPadre}</p>
            <Contador estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre} />
            <Slider estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre}/> */}
            {/* <ItemCount estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre} /> */}
            <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>
            <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>

            <button onClick={handleConfirm}>guardar</button>

            <List usuarios={usuarios}/>

        </Page>
    )
}
export default Cart 

