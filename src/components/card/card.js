import Cards from '../cards/cards.js'
import PokemonsList from '../../services/listPokemons/pokemonList.js'
// import PokemonsItens from './services/pokemonsItens/pokemonItens';

function Card() {
  const {pokedexData} = PokemonsList()
  console.log(pokedexData,PokemonsList())
  return ( 
    <>
     <div className='direction'>
        {pokedexData && pokedexData.map(pokemon => (
          <Card pokemon={pokemon}/>
        ))}
     </div>
        
    </>
  )
}

export default Card;
