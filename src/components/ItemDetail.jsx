// import { Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
// import { NavLink } from "react-router-dom"
// import { useState } from 'react';
// import ItemCount from './ItemCount';
// import { useCarrito } from './CustomProvider';

// const ItemDetail = ({ item }) => { 
//     const [isAdded, setIsAdded] = useState(false)
//     const {stock, initial} = item
//     const { agregarProducto } = useCarrito()

//     const onAdd = (contador) => {
//         // console.log("producto a comprar :")
//         // console.log(item)
//         // console.log("Cantidad a comprar: ")
//         console.log(parseInt(contador))
//         setIsAdded(true)
//         item.cantidad = contador
//         agregarProducto(item)
//     }


// return (
//     <>
//     <CardGroup>
//         <Row>
//             <Col >
//             <Card
//                 // style={{
//                 // width: '18rem'
//                 // }}
//             >
//                 <CardImg
//                 src={item.image}
//                 top
//                 style={{
//                     width: '50%'
//                     }}
//                 />
//                 <CardBody>
//                 <h3>{item.product}</h3>   
//                 <CardTitle tag="h4">
//                     Color: {item.color}
//                 </CardTitle>
//                 <CardSubtitle
//                     className="mb-2 text-muted"
//                     tag="h4"
//                 >
//                     $ {item.price} USD
//                 </CardSubtitle>
//                 <CardText>
//                     Hay {item.stock} en stock
//                 </CardText>
//                 <CardText>
//                     <h6>Información del producto: 🥳 </h6>
//                     {item.description}
//                 </CardText>
//                 {
//                     isAdded ?   
//                     <NavLink to="/cart">
//                         <Button type="button" className="btn btn-danger" size="lg">Ir al carrito</Button>
//                     </NavLink>
//                     :
//                     <ItemCount initial={initial} stock={stock} onAdd={onAdd} itemprice={item.price} />
//                 }
//                 {/* <Link to={`/cart/${item.id}`}><Button>COMPRAR 🥰 </Button></Link> */}
//                 </CardBody>
//             </Card>
//             </Col>
//         </Row>
//         </CardGroup>
//         </>
//     )
// }

// export default ItemDetail


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
        // console.log("producto a comprar :")
        // console.log(item)
        // console.log("Cantidad a comprar: ")
        // console.log(parseInt(contador))
        setIsAdded(true)
        item.cantidad = contador
        agregarProducto(item)
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