import React from "react"
import { useContext } from "react"
import { ThemeContext,themes } from "../../context/themeContext"
import { ButtonToggler } from "../buttonthemeToggler/themeTogglerButton"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    console.log ('ThemeTogglerButton',theme)
    return (
        <div>
         <ButtonToggler onclick={()=>setTheme (theme === themes.light ? themes.dark:themes.light)}> Clique Aqui </ButtonToggler>
        </div>

    )
}