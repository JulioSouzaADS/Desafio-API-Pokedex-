import './App.css';
import Cards from './components/cards/cards'
import PokemonsList from './services/listPokemons/pokemonList'
// import PokemonsItens from './services/pokemonsItens/pokemonItens';
function App() {
  const {pokedexData} = PokemonsList()
  console.log(pokedexData)
  return ( 
    // <>
    //  <div>
    //     {pokedexData && pokedexData.map(pokemon => (
    //       <Card pokemon={pokemon}/>
    //     ))}
    //  </div>
    // </>


    <>
    <div className='direction'>
      {pokedexData && pokedexData.map(pokemon => (
        <Cards pokemon={pokemon} />
      ))}
    </div>
  </>
  )
}

export default App;
