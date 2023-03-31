import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../themeContext" 
import { ButtonToggler } from "../buttonthemeToggler/themeTogglerButton"

export const ThemeTogglerButton = () => {
    const { theme,setTheme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <ButtonToggler onClick={() => setTheme(theme === theme.light ? theme.dark : theme.light )}>Altere Tema Aqui</ButtonToggler>
        </div>

    )
}

