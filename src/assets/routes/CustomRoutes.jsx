import {Route, Routes} from "react-router-dom";
import Pokedex from "../Components/Pokedex";
import PokemonDetails from "../Components/PokemonDetails";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Pokedex />}/> 
            <Route path="/Pokemon/:id" element={<PokemonDetails />}/>
        </Routes>
    )
}
export default CustomRoutes;