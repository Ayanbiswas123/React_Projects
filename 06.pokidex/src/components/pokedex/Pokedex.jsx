import PokiList from "../pokiList/PokiList"
import Search from "../search/Search"
import './Pokedex.css'


function Pokedex(){
    return (
        <div>
            <div className="pokedex-wrap">
            <h1>Pokedex</h1>
            <Search/>
           
        </div>
         <PokiList/>
        </div>
    )
}

export default Pokedex