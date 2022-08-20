import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"
import Perfil from "./Perfil"

const Main = () => {

  return (
    
    <main>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={ <ItemDetailContainer/> } />           
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
    </main>
  )
}

export default Main