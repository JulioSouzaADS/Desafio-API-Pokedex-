import { BrowserRouter,Route,Routes } from "react-router-dom"
import Cards from './cards'

const RoutesFullCard = () => {
return (
    <>
    <BrowserRouter>
        <Routes>

            <Route exact path='/' element={<Cards/>}/>
            <Route exact path='/card/:id' element={<Cards/>}/>

        </Routes>
    </BrowserRouter>

    </>
  
)

}

export default RoutesFullCard