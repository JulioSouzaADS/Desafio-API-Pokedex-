import './App.css';
import Card from './components/card/card'
import PokemonsList from './services/listPokemons/pokemonList'
// import PokemonsItens from './services/pokemonsItens/pokemonItens';
function App() {
  const {pokedexData} = PokemonsList()
  console.log(pokedexData)
  return ( 
    <>
     <div>
        {pokedexData && pokedexData.map(pokemon => (
          <Card pokemon={pokemon}/>
        ))}
     </div>
    </>
  )
}

export default App;
