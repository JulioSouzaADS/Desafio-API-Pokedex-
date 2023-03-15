import React from "react";
import PokemonsList from "../../../services/listPokemons/pokemonList";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState,useEffect } from "react";


const AbilitiesData = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/79/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }

}

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
        setEffects(data.effect_entries);
      }
    };
    fetchData();
  }, [namePokemon, pokedexData]);

  const cardPokemon = pokedexData.map(function (pokemon) {
    if (pokemon.name === namePokemon) {
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
                      <ul>
                        <li>Name {pokemon.abilities[0].ability.name}</li>
                        {/* <li>{pokemon.abilities[0].ability.url}</li> */}
                        <li>Effects :{effects.map(effect => effect.effect)}</li>
                      </ul>
                    </td>
                    {/* <td>
                      <ul>
                        <li>{pokemon.moves[0].move.name}</li>
                        <li>{pokemon.moves[1].move.name}</li>
                        <li>{pokemon.moves[2].move.name}</li>
                      </ul>
                    </td> */}
                  </tr>
                </tbody>
              </Table>
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
  height: 700px;
  flex-direction: column;
  margin: 10px;
  background: linear-gradient(to bottom, #42a796, #fa709a);
  border-radius: 10px;
  box-shadow: 2px 2px 10px #333;
  text-align: center;
`;

const CardTitleH1 = styled.h1`
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  padding: 10px;
`;

const Image = styled.img`
  padding: 5px;
  width: 50%;
  height: 30vh;
`;

const Table = styled.table`
  margin: 15px auto;
  min-width: 80%;
  max-width: 80%;
  text-align: center;
  border: 3px solid black;
  border-radius: 10px;
`;

export default Card


// const Card = () => {
//   const { namePokemon } = useParams()
//   // console.log(namePokemon)
//   const { pokedexData } = PokemonsList()
//   // console.log(pokedexData)
//   let cardPokemon = pokedexData.map(function (pokemon) {
//     // console.log(pokemon)

//     if (pokemon.name === namePokemon) {
//       const urlAbilities = pokemon.abilities[0].ability.url
//       AbilitiesData(urlAbilities)

//           const descriptionEfectsAbilities = async () => {
//             const myData = await AbilitiesData();
//             const effects = myData
//             console.log('lista de efeitos das habilidades ', effects);
//           }
//           descriptionEfectsAbilities()

//       return (
//         <>
//           <Section >
//             <div className="card-title">
//               <CardTitleH1> Name #{pokemon.name} </CardTitleH1>
//               <div>
//                 <Image src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon" />
//               </div>

//               <Table>
//                 <thead>
//                   <tr>
//                     <th>Pokémon</th>
//                     <th>Habilities</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>

//                     <td>
//                       <ul>
//                         <li>{pokemon.abilities[0].ability.name}</li>
//                         <li>{pokemon.abilities[0].ability.url}</li>
//                         {/* <li>{effects.id}</li> */}
//                         {/* <li>{pokemon.abilities[1].ability.name}</li> */}
//                       </ul>
//                     </td>
//                     <td>
//                       <ul>
//                         <li>{pokemon.moves[0].move.name}</li>
//                         <li>{pokemon.moves[1].move.name}</li>
//                         <li>{pokemon.moves[2].move.name}</li>
//                       </ul>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>

//             </div>
//           </Section>

//         </>

//       )
//     }

//   })

//   return (
//     <>
//       {cardPokemon}
//     </>
//   )
// }

// const Section = styled.section`
// min-height:325px;
// width: 650px;
// height: 550px;
// flex-direction: column;
// margin: 10px;
// background: linear-gradient(to bottom, #42a796, #FA709A);
// border-radius: 10px;
// box-shadow: 2px 2px 10px #333;
// text-align: center;

// `

// const CardTitleH1 = styled.h1`
// margin: 0;
// font-size: 12px;
// text-transform: uppercase;
// text-align: left;
// padding: 10px;
// `
// const CardTitleH2 = styled.h2`
// font-size: 10px;
// display: flex;
// justify-content: center;
// margin: 0;
// text-transform: uppercase;
// font-style: italic;
// `

// const CardTitleP = styled.p`
// margin-top: 5px;
// padding: 5px;
// font-size: 14px;
// display: flex;
// margin: 1px;
// display: flex;
// justify-content: center;
// `

// const Image = styled.img`
// padding: 5px;
// width: 50%;
// height: 40vh;
// `

// const SectionDetails = styled.div`
// text-transform: uppercase;
// font-style: italic;
// `


// const TableWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // height: 100vh;
// `;

// const Table = styled.table`
//   margin: auto;
//   width: 80%;
//   max-width: 800px;
//   text-align: center;
//   border: 3px solid black
// `;

// const Th = styled.th`
//   background-color: #ffa500;
//   color: white;
//   font-weight: bold;
//   padding: 10px;
//   text-transform: uppercase;
// `;

// const Td = styled.td`
//   border: 1px solid #ccc;
//   padding: 0px;
// `;


// const List = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 1px;
// `;
