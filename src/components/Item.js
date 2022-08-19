import { Link } from "react-router-dom"
import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
import { products } from "../productos";

const Item = ({ producto }) => {

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
              src={producto.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                {producto.product}
              </CardTitle>
              <CardText>
                Color: {producto.color}
              </CardText>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                $ {producto.price} USD
              </CardSubtitle>
              <CardText>
                Hay {producto.stock} en stock
              </CardText>
              <Link to={`/detalle/${producto.id}`}><Button>Ver detalle</Button></Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </CardGroup>
    </>
  )
}

export default Item



