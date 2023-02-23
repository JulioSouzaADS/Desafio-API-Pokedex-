import './App.css';
import Home from './components/pages/home/home';
import Cards from './components/pages/cards/cards'

import PokemonsList from './services/listPokemons/pokemonList'
import { ThemeTogglerButton } from './components/themeTogglerButton/themeTogglerButton';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './context/themeContext';


function App() {
  const {pokedexData} = PokemonsList()
  // console.log(pokedexData)

  return ( 
    <>
    {/* <div className='direction'>
      {pokedexData && pokedexData.map(pokemon => (
        <Cards pokemon={pokemon} id={pokemon.id} />
        
      ))}

    </div> */}

    <Home/>
      <ThemeProvider>
        <ThemeTogglerButton/>
      </ThemeProvider>

      <BrowserRouter/>
  </>
  )
}

export default App;
