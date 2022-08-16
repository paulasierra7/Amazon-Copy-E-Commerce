import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ id, image, name, type, _callback }) => {
    const [listProduct, setListProduct] = useState([]) 
    const [loading, setLoading] = useState(false)
    const {index} = useParams()

    useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(res=>res.json())
                .then((result) => {
                    setLoading(true);
                    setListProduct(result);
                })
                console.log(listProduct)
        }, [index])

        
    return (
        <>
            {
            !loading ? 
            <ItemDetail listProduct ={listProduct}  /> 
            : 
            <p>Cargando...</p>}
            <div>ItemDetailContainer {index} </div>
        </>
    )
}

export default ItemDetailContainer
