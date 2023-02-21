import './App.css';
import Cards from './components/cards/cards'
import PokemonsList from './services/listPokemons/pokemonList'
import { ThemeTogglerButton } from './components/themeTogglerButton/themeTogglerButton';
import { BrowserRouter , Routes , Switch , Route , Link } from "react-router-dom";
import { ThemeProvider } from './context/themeContext';


function App() {
  const {pokedexData} = PokemonsList()
  // console.log(pokedexData)
  return ( 
    <>
    <div className='direction'>
      {pokedexData && pokedexData.map(pokemon => (
        <Cards pokemon={pokemon} />
      ))}

    </div>



      <ThemeProvider>
        <ThemeTogglerButton/>
      </ThemeProvider>
  </>
  )
}

export default App;
