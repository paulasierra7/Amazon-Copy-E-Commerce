import { useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, NavLink } from 'reactstrap';

import '../estilos.css';
import Slider from "./Slider";

const ItemCount = ({onAdd}) => {
    const [estadoHijo, setEstadoHijo] = useState(0)
    const [estadoPadre, setEstadoPadre] = useState(0)

    const sumar = () => {
        setEstadoHijo(estadoHijo + 1)
        setEstadoPadre(estadoHijo + 1)
    }

    const restar = () => {
        setEstadoHijo(estadoHijo - 1)
        setEstadoPadre(estadoHijo - 1)
    }

    const handleChange = (e) => {
        setEstadoPadre(e.target.value)
    }

    return (
        <div>
            <br />
            <input onChange={handleChange} type="range" step={1} />
            <br />
            <br />

            <ButtonGroup>
                <Button color="danger" outline onClick={restar}>-</Button>
                <h5 className='text-danger'>{estadoPadre}</h5>
                <Button color="danger" outline onClick={sumar}>+</Button>
                </ButtonGroup>
                <div>
                <br />
                    <NavLink to="/cart/">
                        <Button color="danger" onClick={onAdd}>Agregar al carrito</Button>
                    </NavLink>
                </div>
        </div>
    )
}

export default ItemCount








    // const finalPrice = () => {
    //     console.log(itemprice)
    //     setItemprice(estadoPadre * itemprice)
    // }

                        {/* <h3>$({finalPrice})</h3> */}
