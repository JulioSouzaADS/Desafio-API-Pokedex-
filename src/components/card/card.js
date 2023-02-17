import React from "react";
import PokemonsList from "../../services/listPokemons/pokemonList";
import './card.css'

const Card = ({pokemon}) => {
   console.log(pokemon)
    return (
        <>
        <div className="card-title">
            <h1> {pokemon.name} </h1>
            
            <h2> {pokemon.types.map(type => (<p key={type.type.name}>{type.type.name}</p>))} </h2>
        </div>
        <div>
            <img src={pokemon.img} alt="Pokemon" />
        </div>
    </>
    )
 
}

export default Card