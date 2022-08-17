import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {

        //https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe
        const pedido = fetch("https://fakestoreapi.com/products/" + id)

        pedido
            .then((respuesta) => {
                return respuesta.json()
            })
            .then((respuesta) => {
                setItem(respuesta)
            })
            .catch(error => console.log(error))

    }, [id])


    return (
        <>
            <div className='container'>
                <ItemDetail item={item} />
            </div>
        </>
    );
}

export default ItemDetailContainer;
