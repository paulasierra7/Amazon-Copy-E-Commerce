import Item from './Item';
import { useEffect, useState } from 'react'

const ItemList = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=9')

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
            <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
        </div>
        </div>
        </>
    )
}
export default ItemList


// import { customFetch } from './customFetch';
// import { CardGroup, Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody } from 'reactstrap';
// import { products } from '../productos';

// const ItemList = ({listProducts}) => {

//     //     return (
//     //         <>
//     //             { listProducts.map ( product => 
//     //                 <Item 
//     //                     key={product.id} product={product} 
//     //                 /> 
//     //             )}
//     //         </>
//     //     )
//     // }
    
//     // export default ItemList







// import Item from "./Item"

// const ItemList = ({productos}) => {

//     <section>
//     return (
//         {productos.map((producto) => {
//         return <Item />
//     })}
//     </section>
// }

// export default ItemList