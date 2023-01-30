import { useMyPokemonsContext } from "../../common/context/MyPokemons"
import Pokecard from "../../components/Pokecard/Pokecard"

import "./MyPokemons.css"
export default function MyPokemons() {
    const {myPokemons} = useMyPokemonsContext()

    return (
        <div className="my-pokemons-container">
            {myPokemons.map((pokemon) => (
                <Pokecard data={pokemon} key={pokemon.key}/>
            ))}
        </div>
    )
}