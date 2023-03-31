import './App.css';
import RoutesFullCard from './components/routes/routes';
import { ThemeProvider } from './themes/themeContext';

import { ThemeContext } from './themes/themeContext';
import { ButtonToggler } from './themes/buttonthemeToggler/themeTogglerButton';
import { useContext } from 'react';

function App() {
  // const { pokedexData } = PokemonsList()
  // console.log(pokedexData)
  return (
    <>
      <ThemeProvider>  
        <RoutesFullCard /> 
      </ThemeProvider>
     
    </>
  )
}

export default App;


