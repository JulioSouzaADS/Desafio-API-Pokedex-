import Cards from '../cards/cards'
import PokemonsList from '../../../services/listPokemons/pokemonList'
import { ButtonToggler } from '../../buttonthemeToggler/themeTogglerButton'
import { ThemeProvider } from '../../../context/themeContext'
import { ThemeTogglerButton } from '../../themeTogglerButton/themeTogglerButton'
import { useState } from 'react'

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
  const [pokemonsToShow, setPokemonsToShow] = useState(10)

  const handleShowMore = () => {
    setPokemonsToShow(pokemonsToShow + 50)
  }

  
  return (
    <>
      <main>
        <h1 className='titleh1'> 🔫 Pókemos Amigão Pokemons - Apenas Faça O L Imediatamente 🔫 </h1>
        <div className='direction'>
          <div className="card">
          {pokedexData && pokedexData.slice(0, pokemonsToShow).map(pokemon => (
              <Cards key={pokemon.id} pokemon={pokemon} id={pokemon.id} />
            ))}
          </div>

          {pokedexData && pokemonsToShow < pokedexData.length && (
            <button onClick={handleShowMore}> Faça o L Para Mostrar mais</button>
          )}

        </div>
      </main>
    </>
  )
}


export default Home;
