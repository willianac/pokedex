import { useMyPokemonsContext } from "../../common/context/MyPokemons"
import Pokecard from "../../components/Pokecard/Pokecard"

import "./MyPokemons.css"
export default function MyPokemons() {
    const {myPokemons} = useMyPokemonsContext()

    if(!myPokemons.length) {
        return (
            <h1 className="my-pokes-warning">Você ainda não capturou nenhum pokemon!</h1>
        )
    }
    return (
        <div className="my-pokemons-container">
            {myPokemons.map((pokemon) => (
                <Pokecard data={pokemon} key={pokemon.key}/>
            ))}
        </div>
    )
}