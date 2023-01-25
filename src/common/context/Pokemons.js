import { createContext, useState } from "react";

export const PokemonListContext = createContext()
export const PokemonListProvider = ({ children }) => {
    const [listPoke, setListPoke] = useState([]);
    const [searchField, setSearchField] = useState('')
    return (
        <PokemonListContext.Provider value={{listPoke, setListPoke, searchField, setSearchField}}>
            {children}
        </PokemonListContext.Provider>
    )
}