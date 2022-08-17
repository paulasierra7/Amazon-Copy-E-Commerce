import { useState } from "react"
import Page from "./Page"
import Contador from "./Contador"
import Slider from "./Slider"

const Carrito = () => {
    const [estadoPadre, setEstadoPadre] = useState(0)
    const [contador, setContador] = useState(0)
    const [numero, setNumero] = useState(0)

    const handleClick = () => {
        setNumero(numero + 1)
    }

    return (
        <Page titulo ="Carrito" subtitulo="Compra y vende">
            <p id="parrafo">El Contador va : {estadoPadre}</p>
            <Contador estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre} />
            <Slider estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre}/>
        </Page>
    )
}

export default Carrito