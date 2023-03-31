import { useContext } from "react"
import { ThemeContext } from "../themeContext"

export const ButtonToggler = (props) => {

const {theme } = useContext (ThemeContext)
    console.log("button thems ",props)
    return (
        <button {...props}
        style={{ color: theme.color, backgroundColor:theme.background}}
        />
    )
}
