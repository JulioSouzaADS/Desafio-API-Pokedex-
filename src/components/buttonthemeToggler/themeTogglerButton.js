import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"

export const ButtonToggler = (props) => {
const {themes } = useContext (ThemeContext)

    return (
        <button {...props} />
    )
}
