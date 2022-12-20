import fetchData from "../../api/fetchData.js";
import Pokecard from "../../components/Pokecard/Pokecard.jsx";

const resource = fetchData('https://graphqlpokemon.favware.tech/v7')

function Home() {
    const detail = resource.read()
    return ( 
        <section>
            <Pokecard data={detail}/>
        </section>
    )
}

export default Home;