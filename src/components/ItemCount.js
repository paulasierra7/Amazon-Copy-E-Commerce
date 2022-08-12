import App from '../App';
import { useState, useEffect } from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { customFetch } from './customFetch';
import { products } from '../productos';
import { Spinner } from 'reactstrap';


import '../estilos.css';


const ItemCount = ({onAdd, initial, stock}) => {
    const [titulo, setTitulo] = useState("Cargando...")
    const [contador,setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)
    const [loading, setLoading] = useState(false)
    const [listProducts, setListProducts] = useState([])


    useEffect (() => {
        customFetch(products)
            .then(data => {
                setLoading(true)
                setListProducts(data)})

    },[])

    useEffect(()=> {
        setTitulo("cargando tu pokemon")

        const simulacroPedido = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res("Producto cargado - todo bien")
            },1000)
        })
        
        simulacroPedido.then((resultado)=>{
            setTitulo("Done")
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
        {/* <Card
                color="dark"
                inverse
                style={{
                    width: '18rem'
                }}
            >
            <CardBody> */}
                <CardSubtitle>
                { !loading && <Spinner /> }
                </CardSubtitle>
                    <ButtonGroup>
                        {/* <Button onClick={restar}>
                            - 
                        </Button>
                        <p>
                        {contador}
                        </p>
                        <Button onClick={sumar}>
                            + 
                        </Button> */}
                    </ButtonGroup>
            {/* </CardBody>
        </Card> */}
        </>
    )
}

export default ItemCount
