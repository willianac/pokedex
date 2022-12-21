import fetchData from "../../api/fetchData.js";
import Pokecard from "../../components/Pokecard/Pokecard.jsx";
import "./Home.css"

const resource = fetchData('https://graphqlpokemon.favware.tech/v7')

function Home() {
    const detail = resource.read()
    return ( 
        <section className="conteiner">
            <div className="grid-conteiner">
                {detail.map((pokemon) =>(
                    <Pokecard data={pokemon} key={pokemon.key}/>
                ))}
            </div>
        </section>
    )
}

export default Home;