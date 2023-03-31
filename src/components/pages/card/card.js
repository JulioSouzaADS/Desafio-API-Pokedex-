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
    console.log(effects)
    // console.log(pokemon)
    if (pokemon.name === namePokemon) {
      return (
        <>

          <Section>
            <div className="card-title">
              <CardTitleH1> Name #{pokemon.name} Nº {pokemon.id} type {pokemon.type} </CardTitleH1>
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
                    <li> 🔥 Default Moviments 🔥 </li>
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
  width: 650px;
  // height: 750px;
  flex-direction: column;
  margin: 5% auto;
  background: linear-gradient(to bottom, #42a796, #fa709a);
  border-radius: 10px;
  box-shadow: 2px 2px 10px #333;
  text-align: center;
  @media screen and (max-width: 568px) {
    font-size: 16px;
    padding: 5px;
    min-height: 325px;
    width: 95%;
    height: 90%;
  }
  
`;


const CardTitleH1 = styled.h1`
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 5px;
  }
 
`;

const Image = styled.img`
  padding: 5px;
  width: 40%;
  min-width: 150px;
  @media screen and (max-width: 568px) {
    width: 30%;
  }
`;

const UL = styled.ul`
 
  padding: 10px;
  margin:10px;
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;


const Table = styled.table`
  font-size: 18px;
  font-weight: bold;
  margin: 15px auto;
  min-width: 80%;
  max-width: 80%;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-between;
  text-align: center ;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    min-width: 90%;
    max-width: 90%;
  }
`;

const Button = styled.button`
  margin-top:5%;
  min-width: 50%;
  max-width: 100%;
  border: 3px solid black;
  border-radius: 10px;
  justify-content: space-between;
  font-weight: bold;
  font-size:5px;
  color: red;

  @media screen and (max-width: 768px) {
    font-size: 1px;
    margin-top:1%;
  }
`;

const Table2 = styled.table`
  font-size: 18px;
  font-weight: bold;
  margin: 15px auto;
  min-width: 80%;
  max-width: 80%;
  border: 1px solid black;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    min-width: 90%;
    max-width: 90%;
  }
`;

export default Card
