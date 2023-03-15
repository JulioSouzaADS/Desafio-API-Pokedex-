import Cards from '../cards/cards'
import PokemonsList from '../../../services/listPokemons/pokemonList'

const Home = () => {
const {pokedexData} = PokemonsList()
//   console.log(pokedexData)
    return (
        <>
          <hi> Pókemos Amigão Pokemons </hi>
          <div className='direction'>
      {pokedexData && pokedexData.map(pokemon => (
        <Cards pokemon={pokemon} id={pokemon.id} />
        
      ))}

    </div>
        </>
    )
}

export default Home;
