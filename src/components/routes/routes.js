import { BrowserRouter,Route,Switch,Link } from "react-router-dom"
import Home from "../pages/home/home"
import Card from "../pages/card/card"

const RoutesFullCard = (pokemon) => {
return (
    <>
    <BrowserRouter>

        <div>
        <Link to='/'> Home </Link>
        </div>

        <div>
        <Link to='/CardDetail'> Card Details </Link>
        </div>
       
        <Switch>
            <Route exact path="/">
                <Cards/>
            </Route>

            <Route path="/CardDetail">
                <Card/>
            </Route>
        </Switch>
           
     
    </BrowserRouter>

    </>
  
)

}

export default RoutesFullCard