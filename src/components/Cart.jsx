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

            <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>
            <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>

            <button onClick={handleConfirm}>guardar</button>

            <List usuarios={usuarios}/>

        </Page>
    )
}

export default Cart 