import './estilos.css'

const CartWidget = (carritoInfo) => {
    return (
        <>
        <div className='cartWidget-Container'>
        <img className="cartWidget-icon"
                    alt="shoppingCart"
                    src="./cartIcon.png"
                />
        <p className="cartWidget-precio">
            $ {carritoInfo.precio} USD
        </p>
        </div>
        </>
    )
}

export default CartWidget