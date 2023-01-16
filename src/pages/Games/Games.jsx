import Gamecard from "../../components/Gamecard/Gamecard";
import "./Games.css"
import gamelist from "../../json/gamelist.json"

function Games() {
    return (
        <section className="games-conteiner">
            {gamelist.map((game) => (
                <Gamecard 
                    image={game.image}
                    title={game.title}
                    region={game.region}
                    launch={game.launch}
                    text={game.text}
                    key={game.id}/>
            ))}
        </section>
    )
}

export default Games;