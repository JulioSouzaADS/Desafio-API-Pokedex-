import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import { ButtonToggler } from "../buttonthemeToggler/themeTogglerButton"

export const ThemeTogglerButton = () => {
    const { themes } = useContext(ThemeContext)
    console.log (themes)
    return (
        <div>
            <ButtonToggler> Clique Aqui </ButtonToggler>
        </div>

    )
}