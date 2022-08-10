import Contador from "./Contador"

const Main = () => {

    const onAdd = () => {
        console.log("On Add")
    }

    return (
        <main>
            <h2>Home</h2>
            <Contador onAdd={onAdd} init={1} stock={5} />
        </main>
    )
}

export default Main