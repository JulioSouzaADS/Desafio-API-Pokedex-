import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"

export const ButtonToggler = (props) => {
const {theme } = useContext (ThemeContext)
    console.log (theme,'la ele')
    return (
        <button  {...props} style={{color: theme.color, backgroundColor : theme.background}}> BORA BILL !!!  </button>
     
    )
}