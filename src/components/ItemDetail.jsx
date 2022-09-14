import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCarrito } from './CustomProvider';

const ItemDetail = ({ item }) => { 

    const {stock} = item
    
    const [isAdded, setIsAdded] = useState(false)
    
    const { agregarProducto} = useCarrito()
    const onAdd = (contador) => {
        setIsAdded(true)
        item.cantidad = contador
        agregarProducto(item, contador)
    }

return (
    <>
    <CardGroup>
        <Row>
            <Col >
            <Card
                // style={{
                // width: '18rem'
                // }}
            >
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
                <CardTitle tag="h5">
                    {item.category}
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

                    <h6>Información del producto: 🥳 </h6>
                    {item.description}
                
                {
                    isAdded ?   
                    <div>
                        <NavLink to="/cart">
                                <br />                     
                                <Button type="button" className="btn btn-danger" size="lg">Ir al carrito</Button>
                                <br />
                        </NavLink>
                    </div>
                    :
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} itemprice={item.price} itemid={item.id} />

                }
                {/* <Link to={`/cart/${item.id}`}><Button>COMPRAR 🥰 </Button></Link> */}
                </CardBody>
            </Card>
            </Col>
        </Row>
        </CardGroup>
        </>
    )
}

export default ItemDetail