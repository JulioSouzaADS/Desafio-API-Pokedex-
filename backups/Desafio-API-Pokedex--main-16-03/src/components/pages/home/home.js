import Cards from '../cards/cards'
import PokemonsList from '../../../services/listPokemons/pokemonList'
import { ButtonToggler } from '../../buttonthemeToggler/themeTogglerButton'
import { ThemeProvider } from '../../../context/themeContext'
import { ThemeTogglerButton } from '../../themeTogglerButton/themeTogglerButton'

const Home = () => {
const {pokedexData} = PokemonsList()
//   console.log(pokedexData)
    return (
        <>
        
          <hi className='titleh1'> 🔫 Pókemos Amigão Pokemons - Apenas Faça O L Imediatamente 🔫 </hi>
          <div className='direction'>
      {pokedexData && pokedexData.map(pokemon => (
        <Cards pokemon={pokemon} id={pokemon.id} />
        
      ))}

    </div>
        </>
    )
}

export default Home;
