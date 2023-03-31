import Cards from '../cards/cards'
import PokemonsList from '../../../services/listPokemons/pokemonList'
import { useState } from 'react'

import {ThemeProvider} from "../../../themes/themeContext"

// const Home = () => {
//   const { pokedexData } = PokemonsList()


//   //   console.log(pokedexData)
//   return (
//     <>
//     <main> 
//       <hi className='titleh1'> 🔫 Pókemos Amigão Pokemons - Apenas Faça O L Imediatamente 🔫 </hi>
//       <div className='direction'>
//       <div class="card">
//         {pokedexData && pokedexData.map(pokemon => (
//           <Cards pokemon={pokemon} id={pokemon.id} />

//         ))}


//       </div>


//       </div>
//       </main>
//     </>
//   )
// }



const Home = () => {
  
  const { pokedexData } = PokemonsList()
  //   console.log(pokedexData)
  const [displayedPokemonsCount, setdisplayedPokemonsCount] = useState(10)
  const pokemonsPerPage = 10

  const handleShowMore = () => {

    setdisplayedPokemonsCount(displayedPokemonsCount + pokemonsPerPage)
  }

  return (
    <>
      <main>
              
  
        <h1 className='titleh1'> 🔫 Pókemos 🔫 </h1>
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
