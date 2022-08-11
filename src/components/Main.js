import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemListContainer"

const Main = () => {

  const onAdd = () =>{
    console.log("On Add")
  }

  return (
    <main>
        {/* <ItemCount onAdd={onAdd} init={1} stock={5} /> */}
        <ItemListContainer/>
    </main>
  )
}

export default Main