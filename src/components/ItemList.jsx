import Item from './Item';

//productos vienen de itemListContainer
const ItemList = ({ productos }) => {
    return (
        <section className="items">
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto}/>
            })}
        </section>
    )
}
export default ItemList




