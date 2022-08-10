import App from '../App';
import { useState, useEffect } from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import '../estilos.css';


const ItemCount = ({onAdd, initial, stock}) => {
    const [titulo, setTitulo] = useState("Cargando...")
    const [contador,setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    useEffect(()=> {
        setTitulo("cargando")

        const simulacroPedido = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res("Producto cargado - todo bien")
            },2000)
        })
        
        simulacroPedido.then((resultado)=>{
            setTitulo("Producto cargado bien")
            console.log({resultado})
        })
        simulacroPedido.catch((error)=>{})

    },[confirmed])


    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
        if (contador <= 0) {
            setContador(0)
        }
    }
    const resetear = () => {
        setContador(contador*0)
    }
    const confirmar = () => {
        setConfirmed(!confirmed)
    }


    return (
        <>
        <Card
                color="dark"
                inverse
                style={{
                    width: '18rem'
                }}
            >
            <CardBody>
                <CardTitle tag="h5">
                {titulo}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                    Has añadido {contador} prendas al carrito de compras 🛒
                </CardSubtitle>
                    <ButtonGroup>
                        <Button onClick={restar}>
                            - 
                        </Button>
                        <Button onClick={resetear}>
                            reset 
                        </Button>
                        <Button onClick={sumar}>
                            + 
                        </Button>
                    </ButtonGroup>
                    <Button onClick={confirmar}>confirmar</Button>
            </CardBody>
        </Card>
        </>
    )
}

export default ItemCount