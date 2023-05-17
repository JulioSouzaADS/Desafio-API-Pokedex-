import React from "react";
import PokemonsList from "../../../services/listPokemons/pokemonList";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import './card-layout.css'

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
      }

    };
    fetchData();
  }, [namePokemon, pokedexData]);

  const cardPokemon = pokedexData.map(function (pokemon) {
    if (pokemon.name === namePokemon) {
      return (
        <>
          <CardLayout>
            <CardHeader>
              <h2>Name {pokemon.name} </h2>
              <p> Type {pokemon.types[0].type.name}</p>
            </CardHeader>
            <div className="card-image">
              <img src={pokemon.sprites.other.dream_world.front_default} alt="Imagem da Carta" />
            </div>
            <div className="card-body">
              <p>Efeito da Carta</p>
              <p>Effects :{effects.map(effect => effect.effect)}</p>
            </div>
            <CardFooter>
              <p>🔥 Default Moviments  Nº {pokemon.id}🔥</p>
              <CardFooterUl>
                <li>{pokemon.moves[0].move.name}</li>
                <li>{pokemon.moves[1].move.name}</li>
                <li>{pokemon.moves[2].move.name}</li>
              </CardFooterUl>
            </CardFooter>
            <Button> <a href="../">Voltar </a> </Button>
          </CardLayout>
          
        </>
      );
    }
  });

  return <>{cardPokemon}</>;
};

const CardLayout = styled.section`
    position: relative;
    width: 40%;
    background: #000;
    border-radius: 20px;
    margin: 60px auto;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #42a796, #FA709A);
    }



    @media screen and (max-width: 825px) {
      width: 80%;
  }
`

const CardHeader = styled.div`
    text-align: center;
    color: #fff;
    font-size: 24px;
    padding: 10px 0;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
    position: relative;
    z-index: 2;
    text-transform: uppercase;

    &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 3px;
    background: linear-gradient(45deg, #1c90b6, #111); 
  }
    `
    
const CardFooter = styled.div`
    padding: 5px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    padding: 10px 0;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    @media screen and (max-width: 725px) {
    font-size: 10px;
    margin-top:1%;
  }
    `

const CardFooterUl = styled.ul`
padding: 5px;

`

const Button = styled.button`
  margin: auto;
  align-items: center;
  min-width: 50%;
  max-width: 60%;
  border: 3px solid black;
  border-radius: 10px;
  justify-content:center;
  font-weight: bold;
  font-size:25px;
  color: red;
  z-index: 2;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 1px;
    margin-top:1%;
  }
`
export default Card
