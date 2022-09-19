import { Link } from "react-router-dom"
import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useCarrito } from './CustomProvider';
import { useState } from 'react';
import ItemCount from './ItemCount';



const Item = ({ producto }) => {

  const {stock} = producto
    
    const [isAdded, setIsAdded] = useState(false)
    
    const { agregarProducto} = useCarrito()
    const onAdd = (contador) => {
        setIsAdded(true)
        producto.cantidad = 1
        agregarProducto(producto, contador)
    }

  return (
    <div className=" container py-5">
      <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card" style={{
              width: '20rem'
            }}>
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                    <img src={producto.image}
                    className="w-100" />
                    <hr className="my-0" />

                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-top h-100">
                        <h5><span className="badge bg-primary ms-2">New</span></h5>
                      </div>
                    </div>
                  
                  <Link to={`/detalle/${producto.id}`}>

                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-muted">{producto.category}</p>
                      <p className="small text-danger"><s>$ {producto.price + 40} USD</s></p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="text-dark mb-0">{producto.product}</h5>
                      <h5 className="text-dark mb-0">$ {producto.price} USD</h5>
                    </div>            

                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">Available: <span className="fw-bold">{producto.stock}</span></p>
                      <div className="ms-auto text-warning">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                    </div>
                    
                    <div className="card-body">
                      <div className="d-grid gap-2 d-md-block">
                        <Link to={`/detalle/${producto.id}`}>
                          <MDBBtn alignment='end' rounded color='dark' className='mx-2'>Ver detalle</MDBBtn>
                        </Link>
                            {/* <div>
                                <Link to={`/cart`}>
                                  <MDBBtn  rounded color='dark' className='mx-2'>Agregar a carrito</MDBBtn>
                                </Link>
                            </div>  */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>



    {/* <CardGroup>
      <Row>
        <Col >
          <Card
            style={{
              width: '20rem'
            }}
          >
            <CardImg
              src={producto.image}
              top
              width="100rem"
              padding="10px"
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
                 Stock: {producto.stock}
              </CardText>
              <div className="d-grid gap-2 d-md-block">
                <Link to={`/detalle/${producto.id}`}>
                  <MDBBtn rounded className='mx-2' color='light'>Ver detalle</MDBBtn>
                </Link>
                    <div>
                        <Link to={`/cart`}>
                          <MDBBtn  rounded color='dark' className='mx-2'>Agregar a carrito</MDBBtn>
                        </Link>
                    </div> 
              </div>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </CardGroup> */}
    </div>
  )
}

export default Item



