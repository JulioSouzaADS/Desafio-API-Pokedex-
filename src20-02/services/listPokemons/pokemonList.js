import React from "react";
import { urlBase } from "../../variables.js/urlApi";
import { useState, useEffect } from "react";
import './listPokemons.css'

let QuantityPokemons = 5
//conectar Api Pokemom
async function CompleteListOfPokemons() {
  try {

    const listPokemon = `${urlBase}pokemon?limit=${QuantityPokemons}&offset=180`
    const response = await fetch(`${listPokemon}`)
    return await response.json()

  } catch (error) {
    console.error(error);
  }
}

async function ItensOfPokemons(url) {

    try {
        // const pokemon = `${urlBase}pokemon/%{id}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.error(error);
    }
    
}

const PokemonsList = () => {
  const [pokedexData, setPokedexData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const pokemonsList = await CompleteListOfPokemons()
      // console.log(pokemonsList)
      const dates = pokemonsList.results.map(async dates => {  
        return await ItensOfPokemons(dates.url)
      })
      const pokemonsData = await Promise.all(dates);
      // console.log(pokemonsData)
       setPokedexData([...pokedexData,...pokemonsData])
    }
    fetchData()

  }, [])
  // console.log (pokedexData)
  return {pokedexData};
}


// const Story = () => {
//   const [characters, setCharacters] = useState(['Mickey', 'Minnie']);

//   useEffect(() => {
//     // console.log('A lista de personagens foi atualizada:', characters);
//   }, [characters]);

//   return (
//     <div>
//       <h1>Minha história</h1>
//       <ul>
//         {characters.map(character => (
//           <li key={character}>{character}</li>
//         ))}
//       </ul>
//       <button onClick={() => setCharacters(['cabanhas', ...characters])}>
//         Adicionar personagem
//       </button>
//     </div>
//   );
// };

// export default Story;
export default PokemonsList