import { useState } from "react"

const Contador = ({ setEstadoPadre, estadoPadre , onAdd , stock, initial }) => {
    const [estadoHijo, setEstadoHijo] = useState(0)


    const sumar = () => {
        setEstadoHijo(estadoHijo + 1)
        setEstadoPadre(estadoHijo + 1)
    }

    const restar = () => {
        setEstadoHijo(estadoHijo - 1)
        setEstadoPadre(estadoHijo - 1)
    }

    return (
        <div>
            <button onClick={sumar}>summar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Contador