import { createContext,  useContext,  useState } from "react";
import { Outlet } from "react-router-dom";
import { PokemonListContext } from "./Pokemons";

export const MyPokemonsContext = createContext()
export const MyPokemonsProvider = () => {
    const [myPokemons, setMyPokemons] = useState([])

    return (
        <MyPokemonsContext.Provider value={{myPokemons, setMyPokemons}}>
            <Outlet />
        </MyPokemonsContext.Provider>
    )
}

export const useMyPokemonsContext = () => {
    const {myPokemons, setMyPokemons} = useContext(MyPokemonsContext)
    const {listPoke} = useContext(PokemonListContext)

    const addPokemonToList = async (pokemonToAdd) => {
        const capturedPokemon = await listPoke.find((pokemon) => pokemon.key === pokemonToAdd.key)
        setMyPokemons([...myPokemons, capturedPokemon])
    }
    
    return {
        myPokemons,
        addPokemonToList
    }
}