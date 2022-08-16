import '../estilos.css';
import ItemCount from './ItemCount'
import App from '../App'



const CartWidget = ({contadorInicial, aumentarContador, resetearContador, disminuirContador}) => {
    
    return (
        <>
        <div className='cartWidget-Container'>
        <img className="cartWidget-icon"
                    alt="shoppingCart"
                    src="./cartIcon.png"
                />
        <p className="cartWidget-cantidad">
            contador: {contadorInicial}
        </p>
        </div>
        </>
    )
}

export default CartWidget