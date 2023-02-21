import { BrowserRouter,Route,Routes } from "react-router-dom"
import Cards from '../cards/cards'

const RoutesFullCard = (pokemon) => {
return (
    <>
    <BrowserRouter>
        <Routes>
            {/* <Route exact path='/' element={<Cards/>}/>
            <Route exact path='/card/:{id}' element={<Cards/>}/> */}

        </Routes>
    </BrowserRouter>

    </>
  
)

}

export default RoutesFullCard