import React, { useState } from 'react';
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { ButtonGroup } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import "./estilos.css";


const ItemCount = (props) => {
    const [contadorInicial, contadorFinal] = useState(0);

    const aumentarContador= () => {
        contadorFinal(contadorInicial+1)
    }
    const disminuirContador= () => {
        contadorFinal(contadorInicial-1)
        if (contadorInicial <= 0) {
            contadorFinal(0)
        }
    }
    const resetearContador = () => {
        contadorFinal(contadorInicial*0)
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
                Has añadido {contadorInicial} prendas 🛒
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                Escoge la cantidad de prendas a comprar para añadir al carrito 
                </CardSubtitle>
                    <ButtonGroup>
                        <Button onClick={disminuirContador}>
                            - 
                        </Button>
                        <Button onClick={resetearContador}>
                            reset 
                        </Button>
                        <Button onClick={aumentarContador}>
                            + 
                        </Button>
                    </ButtonGroup>
            </CardBody>
        </Card>
        <h1>Has añadido {contadorInicial} prendas 🛒</h1>
        </>
    )
}

export default ItemCount