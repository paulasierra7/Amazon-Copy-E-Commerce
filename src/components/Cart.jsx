import { useState } from "react"
import Page from "./Page"
import List from "./List";
import React, { useContext } from 'react';
import { contexto, useCarrito } from './CustomProvider'

const Cart = () => {

    const { cart } = useContext(useCarrito);

    if (cart.length > 0) {
        return(
            <div>
                {
                    cart.map((element, index) => {
                        return <div key={index}>
                            <div>
                                <img src={element.pictureURL} alt ={element.name}></img>
                            </div>
                            <div>
                                <h3>{element.name}</h3>
                                <h2>Precio: $ {element.price}</h2>
                                <h3>Unidades: </h3>
                            </div>
                            <div className="btn btn-danger">
                                Delete
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }

    return (
        <Page titulo ="Carrito" subtitulo="Compra y vende">

            {/* <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>
            <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/> */}

            {/* <button onClick={handleConfirm}>guardar</button> */}
            <button >guardar</button>

            {/* <List usuarios={usuarios}/> */}
            <List/>

        </Page>
    )
}

export default Cart 