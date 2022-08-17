import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import Perfil from "./Perfil"

const Main = () => {

  const onAdd = () => {
    console.log("On Add")
}

  return (
    
    <main>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={ <ItemDetailContainer/> } />           
          <Route path="/cart" element={<Carrito/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
    </main>
  )
}

export default Main