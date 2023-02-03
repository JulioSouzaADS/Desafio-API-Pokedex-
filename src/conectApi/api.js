import React from "react";
import { urlBase } from "./urlApi";
import { useState,useEffect } from "react";

let QuantityPokemons = 10

//conectar Api Pokemom
async function CompleteListOfPokemons(){
    const listPokemon = `${ urlBase}pokemon?limit=${QuantityPokemons}&offset=0`
    const response = await fetch(`${listPokemon}`)
    return await response.json()
}

 export const Pokedex = () => {
    const [pokedexData, setPokedexData] = useState([])
  
    useEffect(() =>{
      
      const fetchData = async () =>{

        const pokemonsList = await CompleteListOfPokemons()
        // console.log (pokemonsList)
        const dates = pokemonsList.results.map ( dates =>{return dates.name} )
        const results = (dates)
        // console.log(dates)
        setPokedexData(results)
        // console.log(results)
        
      }
      fetchData()

    },[])
    console.log (pokedexData)
 
  return (
    <div>
      <h1> My List Of Pokemon </h1>
      <ul>
        {pokedexData.map((myList,index) => (
          <li key={index}>{myList}</li>
          
        ))}
      </ul>

      <button onClick={() => setPokedexData([...pokedexData, 'Novo Pokemon'])}>
        Add New Pokemom
      </button>
    </div>
  );
}


const Story = () => {
  const [characters, setCharacters] = useState(['Mickey', 'Minnie']);

  useEffect(() => {
    // console.log('A lista de personagens foi atualizada:', characters);
  }, [characters]);

  return (
    <div>
      <h1>Minha história</h1>
      <ul>
        {characters.map(character => (
          <li key={character}>{character}</li>
        ))}
      </ul>
      <button onClick={() => setCharacters(['cabanhas',...characters ])}>
        Adicionar personagem
      </button>
    </div>
  );
};

export default Story;