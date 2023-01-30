import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const PokemonListContext = createContext()
export const PokemonListProvider = () => {
    const [listPoke, setListPoke] = useState([]);
    const [searchField, setSearchField] = useState('')
    return (
        <PokemonListContext.Provider value={{listPoke, setListPoke, searchField, setSearchField}}>
            <Outlet />
        </PokemonListContext.Provider>
    )
}