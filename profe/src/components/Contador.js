import { useState, useEffect, lazy } from "react"
import Presentacional from "./Presentacional"
//useState : hook de estad
//useEffect : hook de efectos ("simula" los metodos del ciclo de vida de un componente)


/* lazy , Suspense */

/* const components = {
    Contador : ()=>"Hola Mundo"
}

const i = "Contador"

const DynamicComponent = components[i]

<DynamicComponent onAdd={onAdd} init={1} stock={5} /> */

//useEffect(function,array?) : Array es un array de dependencias

const Contador = ({ onAdd, initial, stock }) => {

    const [titulo, setTitulo] = useState("Cargando..")
    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)
    console.log("Se crea el estado")

    useEffect(() => {
        console.log("Termino el render")
        console.log("Arranca el efecto")
        console.log("Pido todo a una API, o a una DB(a mi propio servidor web), JSON")
        setTitulo("cargando...")

        //mockAsync
        const simulacroPedido = new Promise((res,rej)=>{
            setTimeout(() => {
                res("Todo bien")                
            }, 2000)
        })

        simulacroPedido.then((resultado)=>{
            console.log({resultado})
        })

        simulacroPedido.catch((error)=>{})



    }, [confirmed])


    console.log("Se saltea el efecto")

    //2

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        setConfirmed(!confirmed)
    }

    console.log("Se crean los metodos")


    console.log("Re renderiza")
    return (
        <div>
            <Presentacional titulo={titulo}/>
            <p id="parrafo">El Contador va : {contador}</p>
            <button onClick={sumar}>summar</button>
            <button onClick={confirmar}>confirmar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Contador