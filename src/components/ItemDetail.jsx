import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCarrito } from './CustomProvider';

const ItemDetail = ({ item }) => { 
    const [isAdded, setIsAdded] = useState(false)
    const {stock, initial} = item
    const { agregarProducto } = useCarrito()

    const onAdd = (contador) => {
        parseInt(contador)
        setIsAdded(true)
        item.cantidad = contador
        agregarProducto(item)
    }


return (
    <>
    <CardGroup>
        <Row>
            <Col >
            <Card>
                <CardImg
                src={item.image}
                top
                style={{
                    width: '50%'
                    }}
                />
                <CardBody>
                <h3>{item.product}</h3>   
                <CardTitle tag="h4">
                    Color: {item.color}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h4"
                >
                    $ {item.price} USD
                </CardSubtitle>
                <CardText>
                    Hay {item.stock} en stock
                </CardText>
                <CardText>
                    <h6>Información del producto: 🥳 </h6>
                    {item.description}
                </CardText>
                {
                    isAdded ?   
                    <NavLink to="/cart">
                        <Button type="button" className="btn btn-danger" size="lg">Ir al carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={initial} stock={stock} onAdd={onAdd} itemprice={item.price} />
                }
                </CardBody>
            </Card>
            </Col>
        </Row>
        </CardGroup>
        </>
    )
}

export default ItemDetail