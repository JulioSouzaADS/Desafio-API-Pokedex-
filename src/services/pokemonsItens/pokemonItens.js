import React from "react";
import { urlBase } from "../../variables.js/urlApi";
import { useState, useEffect } from "react";
import './PokemonItens.css'
import Card from '../../components/card/card'

//conectar Api Pokemom
async function ItensOfPokemons() {

    try {
        const pokemon = `${urlBase}pokemon/44`
        const response = await fetch(`${pokemon}`)
        return await response.json()
    } catch (error) {
        console.error(error);

    }
}

const PokemonsItens = () => {
    const [name, setName] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [types, setTypes] = useState([]);
    const [img, setImage] = useState('');
    const [moves, setMoves] = useState([]);


    useEffect(() => {

        const fetchData = async () => {

            const listItensofPokemons = await ItensOfPokemons()
            setName(listItensofPokemons.name)
            setAbilities(listItensofPokemons.abilities);
            setTypes(listItensofPokemons.types);
            setImage(listItensofPokemons.sprites.other.dream_world.front_default);
            setMoves(listItensofPokemons.moves.slice(0, 5));
            console.log(listItensofPokemons)
            
        }
        fetchData()

    }, [])
    console.log(name)
 
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{name}
                {types.map(type => (<p key={type.type.name}>{type.type.name}</p>))} </h3>

                <h4> <img src={img} alt="Pokemon" /> </h4>
            </div>

            <Card name={name}/>
            
            <div className="card-body">
                
                {/* <div className="card-image">
                    <img src={img} alt="Dark Magician"/>
                </div> */}
                <ul className="card-details">
                    <li><strong>Abilities:</strong>
                        <ul className="abilities">
                            {abilities.map(ability => (
                                <li key={ability.ability.name}>
                                    {ability.ability.name}</li>
                            ))}
                        </ul>
                    </li>

                    <li><strong>Moviments</strong>
                        <ul className="moviments">
                            {moves.map(move => (
                                <li key={move.move.name}>{move.move.name}</li>
                            ))}
                        </ul>
                    </li>
                    
                </ul>
                <p className="card-text"></p>
            </div>
        </div>

// testando com props para formulario
    );
}


export default PokemonsItens

// console.log(listItensofPokemons)
// abilities = listItensofPokemons.abilities.map(abilities => { return abilities.name })
// types = listItensofPokemons.types.map(types => { return types.type.name })
// img = listItensofPokemons.sprites.back_default
// moves = listItensofPokemons.moves.map(moves => { return moves.move.name })



{/* <div className="card">
            <h1>Name:</h1>
            <ul>

                {name}
            </ul>

            <h1>Abilities:</h1>
            <ul>
                {abilities.map(ability => (
                    <li key={ability.ability.name}>
                        {ability.ability.name}</li>
                ))}
            </ul>
            <h1>Types:</h1>
            <ul>
                {types.map(type => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
            <img src={img} alt="Pokemon" />
            <h1>Moves:</h1>
            <ul>
                {moves.map(move => (
                    <li key={move.move.name}>{move.move.name}</li>
                ))}
            </ul>
        </div> */}