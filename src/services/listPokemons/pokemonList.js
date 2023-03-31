import React from "react";
import { urlBase } from "../../variables.js/urlApi";
import { useState, useEffect } from "react";
import './listPokemons.css'

let QuantityPokemons = 10
// let offset = Math.floor(Math.random() * 900);
//conectar Api Pokemom
async function CompleteListOfPokemons() {
  try {
    const listPokemon = `${urlBase}pokemon?limit=${QuantityPokemons}&offset=0`
    const response = await fetch(`${listPokemon}`)
    return await response.json()

  } catch (error) {
    console.error(error);
  }
}

async function ItensOfPokemons(url) {
    try {
        // const pokemon = `${urlBase}pokemon/%{id}`
        const pokemon = `${url}`
        const response = await fetch(pokemon)
        return await response.json()
    } catch (error) {
        console.error(error ,' não foi Possivel Conectar a PokeApi');
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


export default PokemonsList