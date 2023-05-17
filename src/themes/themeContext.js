import { createContext, useState } from "react"

export const themes = { 
    light : {
        color :  ' #748B43',
        background : '#42a796'
    },

      dark : {
        color : '#42a796',
        background : ' #748B43'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

    const [ theme ,setTheme] = useState(themes.dark)
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children }
        </ThemeContext.Provider>
    )
}
 