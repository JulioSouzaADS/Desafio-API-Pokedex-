import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import { ButtonToggler } from "../buttonthemeToggler/themeTogglerButton"
import styled from "styled-components"
export const ThemeTogglerButton = () => {
    const { themes } = useContext(ThemeContext)

    return (
        <div>
            <ButtonToggler>Altere Tema Aqui</ButtonToggler>
        </div>

    )

}

