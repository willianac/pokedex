import { useEffect, useState } from "react";
import fetchData from "../../api/fetchData.js";
import Aside from "../../components/Aside/Aside.js";
import Pokecard from "../../components/Pokecard/Pokecard.jsx";
import "./Home.css"
const gqlQueryPokemons = `query {
    getAllPokemon(offset: 87, take: 229) {
      key
      sprite
      types {
        name
      }
    }
  }`;

let resource = fetchData('https://graphqlpokemon.favware.tech/v7', gqlQueryPokemons)

function Home() {
    let detail = resource.read()
    const [listPoke,setListPoke] = useState(detail)

    const test = (gen) => {
        switch (gen) {
            case 1:
                setListPoke(detail.slice(0, 16))
                break;
            case 2:
                setListPoke(detail.slice(16, 30))
                break;
            case 3:
                setListPoke(detail.slice(30, 42))
                break;
            case 4:
                setListPoke(detail.slice(42, 52))
                break;
            default:
                setListPoke(detail)
                break;
        }
    }

    // const [teste, setTeste] = useState()
    // useEffect(() => {
    //     setTeste(detail.slice(0, 16))
    // },[detail])

    // useEffect(() => {
    //     console.log(teste)
    // },[teste])

    return ( 
        <>
            <Aside change={test}/>
            <section className="conteiner">
                <div className="grid-conteiner">
                    {listPoke.map((pokemon) =>(
                        <Pokecard data={pokemon} key={pokemon.key}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;