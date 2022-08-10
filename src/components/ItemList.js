import Item from './Item';
import { CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';

const ItemList = ({listProducts}) => {

    return (
        <>
            { listProducts.map ( product => 
                <Item 
                    key={product.id} product={product} 
                /> 
            )}
        </>
    )
}

export default ItemList













// import Item from "./Item"

// const ItemList = ({productos}) => {

//     <section>
//     return (
//         {productos.map((producto) => {
//         return <Item />
//     })}
//     </section>
// }

// export default ItemList