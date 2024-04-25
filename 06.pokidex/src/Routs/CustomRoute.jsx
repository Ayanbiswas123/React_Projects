import { Route,Routes } from "react-router-dom";
import Pokedex from "../components/pokedex/Pokedex";
import Pokedetails from "../components/Pokedetails/Pokedetails";

function CustomRoute(){
    return(
        <Routes>
            <Route path = "/" element = {<Pokedex/>}/>
            <Route path="/pokemon/:id" element = {<Pokedetails/>}/>
        </Routes>
    );
}

export default CustomRoute;