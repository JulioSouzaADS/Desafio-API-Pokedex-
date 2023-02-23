import { createContext, useState } from "react"

export const themes = { 
    light : {
        color : '#4d05f5',
        background : ' #08cf40'
    },

      dark : {
        color : '#08cf40',
        background : ' #4d05f5'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    
    const [ theme ,setTheme] = useState(themes.dark)
    // console.log(theme)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children }
        </ThemeContext.Provider>
    )
}
 