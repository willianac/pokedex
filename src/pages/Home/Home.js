import { useState } from "react";

import fetchData from "../../api/fetchData.js";
import genFilterFetch from "../../api/genFilterFetch.js";
import Aside from "../../components/Aside/Aside.jsx";
import Pokecard from "../../components/Pokecard/Pokecard.jsx";
import SearchInput from "../../components/SearchInput/searchInput.jsx";

import { gqlQueryFirstGen } from "../../api/queries.js";
import { gqlQuerySecondGen } from "../../api/queries.js"
import { gqlQueryThirdGen } from "../../api/queries.js";
import { gqlQueryFourthGen } from "../../api/queries.js";
import "./Home.css"

const resource = fetchData('https://graphqlpokemon.favware.tech/v7', gqlQueryFirstGen)
  
function Home() {
    let detail = resource.read()
    const [listPoke,setListPoke] = useState(detail.getAllPokemon)
    const [searchField, setSearchField] = useState('')
    const switchPokemonGen = async (gen) => {
        switch (gen) {
            case 1:
                const gen1 = await genFilterFetch('https://graphqlpokemon.favware.tech/v7', gqlQueryFirstGen)
                setListPoke(gen1.getAllPokemon)
                break;
            case 2:
                const gen2 = await genFilterFetch('https://graphqlpokemon.favware.tech/v7', gqlQuerySecondGen)
                setListPoke(gen2.getAllPokemon)
                break;
            case 3:
                const gen3 = await genFilterFetch('https://graphqlpokemon.favware.tech/v7', gqlQueryThirdGen)
                setListPoke(gen3.getAllPokemon)
                break;
            case 4:
                const gen4 = await genFilterFetch('https://graphqlpokemon.favware.tech/v7', gqlQueryFourthGen)
                setListPoke(gen4.getAllPokemon)
                break;
            default:
                setListPoke(detail)
                break;
        }
    }
    const handleChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredArray = listPoke.filter(pokemon => (
        pokemon.key.includes(searchField.toLowerCase())
    ))
    return ( 
        <>
            <SearchInput searchChange={handleChange}/>
            <Aside change={switchPokemonGen}/>
            <section className="conteiner">
                <div className="grid-conteiner">
                    {filteredArray.map((pokemon) =>(
                        <Pokecard data={pokemon} key={pokemon.key}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;
