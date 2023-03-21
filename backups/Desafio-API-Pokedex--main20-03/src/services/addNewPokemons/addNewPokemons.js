import React, { useState, useEffect } from "react";
import { urlBase } from "../../variables.js/urlApi";

async function CompleteListOfPokemons(quantityPokemons, offset) {
  try {
    const listPokemon = `${urlBase}pokemon?limit=${quantityPokemons}&offset=${offset}`;
    const response = await fetch(`${listPokemon}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function ItensOfPokemons(url) {
  try {
    const pokemon = `${url}`;
    const response = await fetch(pokemon);
    return await response.json();
  } catch (error) {
    console.error(error, " não foi Possivel Conectar a PokeApi");
  }
}

const AddPokedexDa = () => {
  const [pokedexData, setPokedexData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [quantityPokemons, setQuantityPokemons] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const AddPokedexDa = await CompleteListOfPokemons(quantityPokemons, offset);
      const dates = AddPokedexDa.results.map(async (dates) => {
        return await ItensOfPokemons(dates.url);
      });
      const pokemonsData = await Promise.all(dates);
      setPokedexData([...pokedexData, ...pokemonsData]);
    };
    fetchData();
  }, [quantityPokemons, offset]);

  const handleShowMore = () => {
    setQuantityPokemons(quantityPokemons + 10);
    setShowMore(true);
  };

  return (
    <>
      <div>
        {pokedexData.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
      {showMore && (
        <button className="show-more" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </>
  );
};

export default AddPokedexDa;
