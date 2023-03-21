import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from "../pages/home/home"
import Card from "../pages/card/card"

const RoutesFullCard = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>

                <Route path="/card-detail/:namePokemon" element={<Card/>}> </Route>
                
            </Routes>

            </BrowserRouter>
    )

}

export default RoutesFullCard