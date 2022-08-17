import { Routes, Route } from "react-router-dom"
import CartWidget from "./cartWidget"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import Perfil from "./Perfil"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:productoid" element={<ItemListContainer/>}/>
                
                <Route path="/item/:productoid" element={ <ItemDetailContainer/> } />           
                
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
            </Routes>
        </main>
    )
}

export default Main