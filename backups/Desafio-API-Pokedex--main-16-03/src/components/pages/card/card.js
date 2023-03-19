import React from "react";
import PokemonsList from "../../../services/listPokemons/pokemonList";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Card = () => {
  const { namePokemon } = useParams();
  const { pokedexData } = PokemonsList();
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const urlAbilities = pokedexData.find(pokemon => pokemon.name === namePokemon)?.abilities?.[0]?.ability?.url;
      if (urlAbilities) {
        const response = await fetch(urlAbilities);
        const data = await response.json();
        //adicionei essa parte na busca pelo texto ''en
        const enEffects = data.effect_entries.filter(effect => effect.language.name === 'en');
        setEffects(enEffects);
        // setEffects(data.effect_entries);
      }
      
    };
    fetchData();
  }, [namePokemon, pokedexData]);

  const cardPokemon = pokedexData.map(function (pokemon) {
    // console.log(effects[1])
    // console.log(pokemon)
    if (pokemon.name === namePokemon ) {
      return (
        <>
         
          <Section>
            <div className="card-title">
              <CardTitleH1> Name #{pokemon.name} </CardTitleH1>
              <div>
                <Image src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon" />
              </div>

              <Table>
                <thead>
                  <tr>
                    <th>Habilities</th>
                    {/* <th>Pokémon</th> */}
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>
                      <UL>
                        <li>Name {pokemon.abilities[0].ability.name}</li>
                        {/* <li>{pokemon.abilities[0].ability.url}</li> */}
                        {/* <li>Effects :{effects.map(effect => effect.effect)}</li> */}
                       <li>Effects :{effects.map(effect => effect.effect)}</li>
 
                      </UL>
                    </td>
                   
                  </tr>
                </tbody>
              </Table>
              <Table2>
              <td>
                      <UL>
                        <li>{pokemon.moves[0].move.name}</li>
                        <li>{pokemon.moves[1].move.name}</li>
                        <li>{pokemon.moves[2].move.name}</li>                       
                      </UL>
                    </td>
                    </Table2>
              <div><Button> <a href="../">Voltar </a> </Button></div>
            </div>
          </Section>
        </>
      );
    } 
  });

  return <>{cardPokemon}</>;
};

const Section = styled.section`
  min-height: 325px;
  width: 650px;
  height: 750px;
  flex-direction: column;
  margin: 10px auto;
  background: linear-gradient(to bottom, #42a796, #fa709a);
  border-radius: 10px;
  box-shadow: 2px 2px 10px #333;
  text-align: center;
`;


const CardTitleH1 = styled.h1`
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
 
`;

const Image = styled.img`
  padding: 5px;
  width: 50%;
  height: 20vh;
`;

const UL = styled.ul`
 
  padding: 10px;
`;


const Table = styled.table`
  font-size: 15px;
  font-weight: bold;
  margin: 15px auto;
  min-width: 80%;
  max-width: 80%;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-between;
  text-align: center ;
`;

const Button = styled.button`
 
  min-width: 50%;
  max-width: 100%;
  border: 3px solid black;
  border-radius: 10px;
  justify-content: space-between;
  font-weight: bold;
  font-size:20px
  color: red;
`;

const Table2 = styled.table`
  font-size: 15px;
  font-weight: bold;
  margin: 15px auto;
  min-width: 80%;
  max-width: 80%;
  border: 1px solid black;
  border-radius: 10px;
`;

export default Card
