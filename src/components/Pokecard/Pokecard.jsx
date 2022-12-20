import "./Pokecard.css"

export default function Pokecard({ data }) {
    return (
        <div className="card-conteiner">
            <div className="poke-card">
                <div className="upper-card">
                    <div className="img-wrapper">
                        <img src={data.sprite} alt="pokemon ivysaur"></img>
                    </div>
                </div>
                <div className="mid-card">
                    <span>
                        <h3>{data.key}</h3>
                    </span>
                </div>
                <div className="lower-card">
                    <span>
                        <h3>{data.types[0].name}</h3>
                        <h3>{data.types[1]?.name}</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}