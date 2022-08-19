import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => { 
    const [isAdded, setIsAdded] = useState(false)
    const {stock, initial} = item

    const onAdd = () => {
        setIsAdded(true)
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
                    width: '18rem'
                    }}
                />
                <CardBody>
                <h3>Este es el detalle del producto</h3>   
                <CardTitle tag="h5">
                    {item.product}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    $ {item.price} USD
                </CardSubtitle>
                <CardText>
                    Hay {item.stock} en stock
                </CardText>
                <CardText>
                    <h6>Esta es la información del producto: 🥳 </h6>
                    {item.description}
                </CardText>
                {
                    isAdded ?
                    <NavLink to="/cart">
                        <Button>Ir al carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={initial} stock={stock} onAdd={onAdd} itemprice={item.price} />
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