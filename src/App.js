import './App.css';
import PokemonsList from './services/listPokemons/pokemonList'
import RoutesFullCard from './components/routes/routes';
import Home from './components/pages/home/home';



function App() {
  // const { pokedexData } = PokemonsList()
  // console.log(pokedexData)
  return (
    <>
      <RoutesFullCard />
      {/* <Home></Home> */}
    </>
  )
}

export default App;


