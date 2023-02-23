import React from "react";
import { urlBase } from "../../variables.js/urlApi";
import { useState, useEffect } from "react";
// import './PokemonItens.css'
import Card from '../../components/card/card'


let id = Math.floor(Math.random() * 1279);
//conectar Api Pokemom
async function ItensOfPokemons() {

    try {
        const pokemon = `${urlBase}pokemon/%{id}`
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
    
    return (
       
        <Card name={name}>
            <>
                <div className="card-title">
                    <h1> {name} </h1>
                    
                    <h2> {types.map(type => (<p key={type.type.name}>{type.type.name}</p>))} </h2>
                </div>
                <div>
                    <img src={img} alt="Pokemon" />
                </div>

                <div className="painel">
                    <div className="info">
                        <li><strong>Moviments</strong>
                            <h2> {moves.map(move => (
                                <li key={move.move.name}>{move.move.name}</li>
                            ))}
                            </h2>
                        </li>
                    </div>

                    <div className="info">
                        <li><strong>abilities</strong>
                            <h2>  {abilities.map(ability => (
                                <li key={ability.ability.name}>
                                    {ability.ability.name}</li>

                            ))}
                            </h2>
                        </li>
                    </div>

                </div>
            </>
            
        </Card>
  
    );
    
}


export default PokemonsItens






 // <div className="card">

        //     <div className="card-header">
        //         <h3 className="card-title">{name}
        //             {types.map(type => (<p key={type.type.name}>{type.type.name}</p>))} </h3>

        //         <h4> <img src={img} alt="Pokemon" /> </h4>

        //     </div>

        //     <div className="card-body">

        //         {/* <div className="card-image">
        //             <img src={img} alt="Dark Magician"/>
        //         </div> */}
        //         <ul className="card-details">
        //             <li><strong>Abilities:</strong>
        //                 <ul className="abilities">
        //                     {abilities.map(ability => (
        //                         <li key={ability.ability.name}>
        //                             {ability.ability.name}</li>

        //                     ))}

        //                 </ul>
        //             </li>

        //             <li><strong>Moviments</strong>
        //                 <ul className="moviments">
        //                     {moves.map(move => (
        //                         <li key={move.move.name}>{move.move.name}</li>
        //                     ))}
        //                 </ul>
        //             </li>
        //         </ul>