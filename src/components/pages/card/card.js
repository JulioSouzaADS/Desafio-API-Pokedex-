import React from "react";
import PokemonsList from "../../../services/listPokemons/pokemonList";
import { useParams } from "react-router-dom";

const Card = () => {
  const { pokedexData } = PokemonsList()
  // console.log(pokedexData)

  let cardPokemon = pokedexData.map(function (pokemon) {
    return pokemon.id
  })

  const { namePokemon} = useParams()


  return (
    <>

      <section >
        <div className="card-title">
          <h1> tafoda #</h1>
                 <div>
                   </div>
        </div>
      </section>
      <p> Bora bill </p>
    </>
  )
}

export default Card