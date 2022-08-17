import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
import { Link } from "react-router-dom"

const ItemDetail = ({ item }) => {

return (
    <>
    <CardGroup>
        <Row>
            <Col >
            <Card
                style={{
                width: '18rem'
                }}
            >
                <CardImg
                src={item.image}
                top
                width="100%"
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
                <Link to={`/cart/${item.id}`}><Button>COMPRAR 🥰 </Button></Link>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </CardGroup>
        </>
    )
}

export default ItemDetail