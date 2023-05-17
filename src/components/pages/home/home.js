import Cards from '../cards/cards'
import PokemonsList from '../../../services/listPokemons/pokemonList'
import { useState } from 'react'
import {ThemeProvider} from "../../../themes/themeContext"

const Home = () => {
  const { pokedexData } = PokemonsList()
  const [displayedPokemonsCount, setdisplayedPokemonsCount] = useState(12)
  const pokemonsPerPage = 12

  const handleShowMore = () => {
    setdisplayedPokemonsCount(displayedPokemonsCount + pokemonsPerPage)
  }

  return (
    <>
      <main>
        <h1 className='titleh1'> 🔫  Lista De Pókemos 🔫 </h1>
        <div className='direction'>
          <div className="card">
            {pokedexData && pokedexData.slice(0, displayedPokemonsCount).map(pokemon => (
              <Cards key={pokemon.id} pokemon={pokemon} id={pokemon.id} />
            ))}
          </div>

          {pokedexData && displayedPokemonsCount < pokedexData.length && (
            <button onClick={handleShowMore}> Mostrar mais</button>
          )}
        </div>
       
      </main>
    </>
  )
}

export default Home;
