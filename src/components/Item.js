import { rowColsPropType, columnProps, Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';

const Item = ({ product }) => {
  
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
              src={product.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                {product.product}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                $ {product.price} USD
              </CardSubtitle>
              <CardText>
                {product.stock} hay en stock.
              </CardText>
              <Button>
                Ver detalle
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </CardGroup>
    </>
  )
}

export default Item



// const Item = ({producto}) => {
//   return (
//     <article className="item">
//         <h2 className="item_title">{producto.nombre}</h2>
//         <p className="item_title">{producto.nombre}</p>
//     </article>
//   )
// }

// export default Item