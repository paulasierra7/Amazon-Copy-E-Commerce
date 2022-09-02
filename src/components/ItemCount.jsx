// import { useState} from "react" 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, ButtonGroup, NavLink } from 'reactstrap';
// import { Card } from "react-bootstrap";


// import '../estilos.css';

// const ItemCount = ({ estadoPadre , onAdd , stock, initial }) => {
//     const [contador, setContador] = useState(0)
//     const [confirmed, setConfirmed] = useState(0)

//     const sumar = () => {
//         setContador(contador + 1)
//         setConfirmed(contador + 1)
//     }

//     const restar = () => {
//         setContador(contador - 1)
//         setConfirmed(contador - 1)
//     }

//     const confirmar = () => {
//         onAdd(contador)
//     }
//     const handleChange = (e) => {
//         setContador(e.target.value)
//     }

//     return (
//         <div>
//             <br />
//             <Card>
//             <Card.Body>Llévatelo - Modifica el slider ó los botones para agregar al 🛒</Card.Body>
//             </Card>
//             <br />
//             <input onChange={handleChange} type="range" step={1} />
//             <br />
//             <br />

//             <ButtonGroup>
//                 <Button color="danger" outline onClick={restar}>-</Button>
//                 <h5 className='text-danger'>{contador}</h5>
//                 <Button color="danger" outline onClick={sumar}>+</Button>
//                 </ButtonGroup>
//                 <div>
//                 <br />
//                     <NavLink to="/cart/">
//                         <Button color="danger" onClick={confirmar}>Agregar al carrito</Button>
//                     </NavLink>
//                 </div>
//         </div>
//     )
// }

// export default ItemCount


import { useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, NavLink } from 'reactstrap';
import { Card } from "react-bootstrap";


import '../estilos.css';

const ItemCount = ({ estadoPadre , onAdd , stock, initial }) => {
    const [contador, setContador] = useState(0)
    // const [confirmed, setConfirmed] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
        // setConfirmed(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
        // setConfirmed(contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
    }
    const handleChange = (e) => {
        setContador(e.target.value)
    }

    return (
        <div>
            <br />
            <Card>
            <Card.Body>Llévatelo - Modifica el slider ó los botones para agregar al 🛒</Card.Body>
            </Card>
            <br />
            <input onChange={handleChange} type="range" step={1} />
            <br />
            <br />

            <ButtonGroup>
                <Button color="danger" outline onClick={restar}>-</Button>
                <h5 className='text-danger'>{contador}</h5>
                <Button color="danger" outline onClick={sumar}>+</Button>
                </ButtonGroup>
                <div>
                <br />
                    <NavLink to="/cart/">
                        <Button color="danger" onClick={confirmar}>Agregar al carrito</Button>
                    </NavLink>
                </div>
        </div>
    )
}

export default ItemCount





