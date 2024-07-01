import Search from "./Search.jsx";
import PokemonList from './Pokemonlist.jsx'
function Pokedex() {
    return(
        <div className="pokedex-wrapper">
           
            <Search />
            <div className="item-heading">Pokemon List</div>
            <PokemonList />
        </div>
    )
}
export default Pokedex;
