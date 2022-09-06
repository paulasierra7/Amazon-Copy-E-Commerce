import { useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, NavLink} from 'reactstrap';
import { Card } from "react-bootstrap";
import {toast} from "react-toastify"
import '../estilos.css';


const ItemCount = ({ estadoPadre , onAdd , stock, initial}) => {
    
    const [contador, setContador] = useState(initial)

    const sumar = () => contador < stock && setContador (contador + 1)
    const restar = () => contador > 0 && setContador (contador - 1)
    const confirmar = () => onAdd(contador)
    
    return (
        <div>
            <br /><Card><Card.Body>Agrega a tu 🛒. Recuerda no agregar más del stock</Card.Body></Card><br />
            <ButtonGroup>
                <Button color="danger" outline onClick={restar}>-</Button>
                <h5 className='text-dark'>{contador}</h5>
                <Button color="danger" outline onClick={contador < stock ? sumar : () =>  {toast.error("Lo sentimos, solo hay "+ stock +" productos en stock 😩", { theme: "colored" })}}>+</Button>
            </ButtonGroup>
            <div><br />
                <NavLink to="/cart/">
                    <Button color="danger" onClick={confirmar}>Agregar al carrito</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default ItemCount





