import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const ItemDetail = ({listProduct, id, image, name, type, _callback }) => {  
    return 
    <> 
        <div className>
            <h4>Detalle de tu pokemon</h4>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={listProduct.name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <p>Esta es la información a detalle del pokemon</p>
            </div> 
            <Link to={"/itemDetailContainer/" + id}>
                <Button>Ver detalle</Button>
            </Link> 
            <h1>hola {name}</h1>
        </div>
    </>
}
export default ItemDetail


