import Item from './Item';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import ItemDetailContainer from './ItemDetailContainer';

const ItemList = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=30')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results)  {
        results.forEach( async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data =  await res.json()
            setAllPokemons( currentList => [...currentList, data])
            await allPokemons.sort((a, b) => a.id - b.id)
        })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => { 
    getAllPokemons()
    }, [])

    return (
        <>
        <div className="app-contaner">
        <div className="pokemon-container">
            <div className="all-container">
            {allPokemons.map( (pokemonStats, index) => 
                <Item
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
                />)}
            
            </div>
            <Button color="secondary" size="lg" onClick={() => getAllPokemons()}>¿No sale tu Pokemon? Cargar mas</Button>
        </div>
        </div>
        </>
    )
}
export default ItemList



// //profe
// const pedido = fetch("https://jsonplaceholder.typicode.com/users")

// .then((resultado)=>{
//     console.log(resultado)

//     const productos_con_formato = resultado.json()
// })

// .catch((error)=>{
//     console.log("err or")
// })


// //profe
// const pedido = fetch("https://jsonplaceholder.typicode.com/users")

// .then((resultado => resultado.json()))
// .then((resultado) => console.log(resultado))
// })

// .catch((error)=>{
//     console.log("err or")
// })