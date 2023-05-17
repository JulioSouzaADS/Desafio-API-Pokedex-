import React from "react";
import './card.css'
import styled from "styled-components";
import { ThemeContext } from "../../../themes/themeContext";
import { useContext } from "react";

const Cards = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <>  
            <Section theme={ theme }>
                <div className="card-title">
                    <CardTitleH1> {pokemon.name} #{pokemon.id}</CardTitleH1>
                    <CardTitleH2> {pokemon.types.map(type => (<CardTitleP key={type.type.name}>{type.type.name}</CardTitleP>))} </CardTitleH2>
                    <div>
                        <Image src={pokemon.sprites.other.home.front_shiny} alt="imagem Pokemon" />
                    </div>
                 <SectionDetails> <a href={`/card-detail/${pokemon.name}`}>Detalhes</a> </SectionDetails>
                </div>
            </Section>
        </>
    )
}

    const Section = styled.section`
    /* background-color: ${props => (props.theme.background)};  */
    width: 250px;
    min-width: 300px;
    flex-direction: column;
    margin: 15px;
    background: linear-gradient(to bottom, #42a796, #FA709A);
    border-radius: 10px;
    box-shadow: 2px 2px 10px #333;
    text-align: center;

    &:hover{
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      background-color: red;
      transition: 0.5s ease-in-out;
    }
    
    `
    const CardTitleH1 = styled.h1 `
    margin: 0;
    font-size: 12px;
    text-transform: uppercase;
    text-align: left;
    padding: 10px;
    `
    const CardTitleH2 = styled.h2 `
    font-size: 10px;
    display: flex;
    justify-content: center;
    margin: 0;
    text-transform: uppercase;
    font-style: italic;
    `

    const CardTitleP = styled.p `
    margin-top: 5px;
    padding: 5px;
    font-size: 14px;
    display: flex;
    margin: 1px;
    `

    const Image = styled.img `
    padding: 5px;
    width: 80%;
    min-width: 150px;
    ` 

    const SectionDetails = styled.button `
    text-transform: uppercase;
    font-style: italic;
    padding-bottom:5px;
    font-weight: 700;
    border: 1px solid black;
    `
export default Cards