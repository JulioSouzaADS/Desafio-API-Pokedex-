import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"

export const ButtonToggler = (props) => {
const {theme } = useContext (ThemeContext)
    console.log("button thems ",theme)
    return (
        <button {...props}
        style={{ color: theme.color, backgroundColor:theme.background}}
        />
    )
}
