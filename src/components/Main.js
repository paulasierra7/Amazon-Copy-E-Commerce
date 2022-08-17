import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import Perfil from "./Perfil"

const Main = () => {

  return (
    
    <main>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={ <ItemDetailContainer/> } />           
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
    </main>
  )
}

export default Main