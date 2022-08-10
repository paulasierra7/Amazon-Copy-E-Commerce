import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemListContainer"

const Main = () => {

  const onAdd = () =>{
    console.log("On Add")
  }

  return (
    <main>
        <h1>Bienvenidos! :) </h1>
        <ItemCount onAdd={onAdd} init={1} stock={5} />
        <ItemListContainer/>
    </main>
  )
}

export default Main