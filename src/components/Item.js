import ItemCount from "./ItemCount";
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';


const Item = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div> 
            <Button>Ver detalle</Button>
            {/* <Link to={"/ItemDetail" + name}>
                <Button>Ver detalle</Button>
            </Link>  */}
        </div>
    )
}

export default Item
































// import { rowColsPropType, columnProps, Row, Col, CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';

// const Item = ({ product }) => {
  
//   return (
//     <>
//     <CardGroup>
//       <Row>
//         <Col >
//           <Card
//             style={{
//               width: '18rem'
//             }}
//           >
//             <CardImg
//               src={product.image}
//               top
//               width="100%"
//             />
//             <CardBody>
//               <CardTitle tag="h5">
//                 {product.product}
//               </CardTitle>
//               <CardSubtitle
//                 className="mb-2 text-muted"
//                 tag="h6"
//               >
//                 $ {product.price} USD
//               </CardSubtitle>
//               <CardText>
//                 {product.stock} hay en stock.
//               </CardText>
//               <Button>
//                 Ver detalle
//               </Button>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </CardGroup>
//     </>
//   )
// }

// export default Item



// const Item = ({producto}) => {
//   return (
//     <article className="item">
//         <h2 className="item_title">{producto.nombre}</h2>
//         <p className="item_title">{producto.nombre}</p>
//     </article>
//   )
// }

// export default Item