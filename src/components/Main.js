import { Routes, Route } from "react-router-dom"
import CartWidget from "./cartWidget"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Perfil from "./Perfil"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/itemlistcontainer/" element={<ItemListContainer/>}/>
                
                <Route exact path="/itemdetail/:id" element={ <ItemDetailContainer/> } />           
                
                <Route path="/cartwidget/" element={<CartWidget/>}/>
                <Route path="/perfil/" element={<Perfil/>}/>
            </Routes>
        </main>
    )
}

export default Main