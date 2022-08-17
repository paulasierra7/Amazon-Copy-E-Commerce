import { useState } from "react"

const Contador = ({ setEstadoPadre, estadoPadre , onAdd , stock, initial }) => {
    const [estadoHijo, setEstadoHijo] = useState(0)
    const [confirmed, setConfirmed] = useState(false)


    const sumar = () => {
        //setEstadoHijo(estadoHijo + 1)
        setEstadoHijo(estadoHijo + 1)
    }

    const restar = () => {
        setEstadoHijo(estadoHijo - 1)
    }

    const confirmar = () => {
        setEstadoPadre(estadoHijo)
    }

    return (
        <div>
            <button onClick={sumar}>summar</button>
            <button onClick={confirmar}>confirmar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Contador