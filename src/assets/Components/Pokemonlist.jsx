// import { useEffect, useState } from "react";
// import axios from 'axios';

// function PokemonList() {
//     const [pokemonList, setPokemonList] = useState([]);
//     const [isloading, setLoading] = useState(true);


//     async function downloadPokemons() {
//         const response = await axios.get("https://pokeapi.co/api/v2/pokemon");//this downloads list of 20 pokemons
//         const pokemonResults = response.data.results;  //  we get the array of pokemons from result
//         const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
//         // passing that promise array to axios all
//         const pokemonData = await axios.all(pokemonResultPromise);  //  array of 20 Pokemon detailed data

//         console.log(pokemonData);
//          const res = pokemonData.map((pokeData) => {
//             const pokemon = pokeData.data;
//             return {
//                 id: pokemon.id,
//                 name: pokemon.name, 
//                 image: (pokemon.sprites.other?.dream_world?.front_default) || pokemon.sprites.front_shiny,
//                 //image: (pokeData.sprites.other)? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
//                 types: pokemon.types
//             }
//          });
//          console.log(res);
//         setPokemonList(res);
//         setLoading(false);
//         }
   
//     useEffect(() => {
//        downloadPokemons();
//     }, [])

//     return (
     
//         <div className="Pokemon-list-wrapper">
//             <div>Pokemon List</div>
//             {(isloading) ? 'Loading...':
//                 pokemonList.map((p) => <pokemon name={p.name} image={p.image} key={p.id}/>)
//             }
//         </div>
//     )
// }
//export default PokemonList;









import { useEffect, useState } from "react";
import axios from 'axios';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function downloadPokemons() {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            const pokemonResults = response.data.results;
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
            const pokemonData = await Promise.all(pokemonResultPromise);

            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other?.dream_world?.front_default) || pokemon.sprites.front_shiny,
                    types: pokemon.types
                };
            });
            setPokemonList(res);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch Pokémon data:", error);
            setLoading(false); // Even if there is an error, stop the loading state
        }
    }

    useEffect(() => {
        downloadPokemons();
    }, []);

    return (
        <div className="Pokemon-list-wrapper">
            <div>Pokemon List</div>
            {isLoading ? "Loading..." : 
                pokemonList.map((pokemon) => (
                    <div key={pokemon.id}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <div>{pokemon.name}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default PokemonList;
