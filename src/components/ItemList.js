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

        {allPokemons.map( (pokemonStats, index) => 
                <ItemDetailContainer
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
                />)}
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