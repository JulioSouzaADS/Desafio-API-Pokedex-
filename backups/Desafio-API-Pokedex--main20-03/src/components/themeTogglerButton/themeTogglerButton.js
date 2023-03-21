import React from "react"
import { useContext } from "react"
import { ThemeContext ,themes} from "../../context/themeContext"
import { ButtonToggler } from "../buttonthemeToggler/themeTogglerButton"
import styled from "styled-components"

export const ThemeTogglerButton = () => {
    const { theme,setTheme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <ButtonToggler onclick={() => setTheme(theme === themes.light ? themes.dark : theme.light )}>Altere Tema Aqui</ButtonToggler>
        </div>

    )

}

