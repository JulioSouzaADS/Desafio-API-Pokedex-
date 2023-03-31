import React from "react";
import './card.css'
import styled from "styled-components";
import { ThemeContext } from "../../../themes/themeContext";
import { useContext } from "react";

const Cards = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext)
    // console.log(theme)
    return (
        <>  
            <Section theme={ theme }>
                <div className="card-title">
                    <CardTitleH1> {pokemon.name} #{pokemon.id}</CardTitleH1>
                    <CardTitleH2> {pokemon.types.map(type => (<CardTitleP key={type.type.name}>{type.type.name}</CardTitleP>))} </CardTitleH2>
                    <div>
                        <Image src={pokemon.sprites.other.home.front_shiny} alt="imagem Pokemon" />
                    </div>
                 <SectionDetails> <a href={`/card-detail/${pokemon.name}`}>Ver Detalhes</a> </SectionDetails>
                </div>
            </Section>
        </>
    )
}

    const Section = styled.section`
    /* background-color: ${props => (props.theme.background)};  */
    width: 250px;
    min-width: 300px;
    // height: 350px;
    flex-direction: column;
    margin: 15px;
    background: linear-gradient(to bottom, #42a796, #FA709A);
    border-radius: 10px;
    box-shadow: 2px 2px 10px #333;
    text-align: center;
    
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
    // height: 20vh;
    min-width: 150px;
    ` 

    const SectionDetails = styled.div `
    text-transform: uppercase;
    font-style: italic;
    padding-top:15px;
    font-weight: 700;
    `
export default Cards