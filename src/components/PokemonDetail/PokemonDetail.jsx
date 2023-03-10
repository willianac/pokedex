import "./PokemonDetail.css"
import { setColorType } from "../../common/setColorType"
import { useNavigate, useParams } from "react-router-dom"
import { useMyPokemonsContext } from "../../common/context/MyPokemons"
import { useMemo } from "react"

export default function PokemonDetail({ data, artwork, openModal }) {
    const type = data.types
    const image = artwork.find(art => data.key === art.name)
    const navigate = useNavigate()
    const params = useParams()
    const {myPokemons} = useMyPokemonsContext()
    const isAlreadyCaptured = useMemo(() => myPokemons.some((pokemon) => (pokemon.key === params.key)), [myPokemons, params])

    return (
        <>
            <button className="btn-arrow-back" onClick={() => navigate(-1)}>
                <img src="/assets/arrow.png" alt="arrow back" />
            </button>
            <main className="poke-conteiner">  
                <div className="left-conteiner">
                    <div className="img-conteiner">
                        <img src={image?.artwork} alt={`the pokemon ${data.key}`}/>
                    </div>
                    <h2>{data.key}</h2>
                    <div className="types-conteiner">
                        <span className={`bg-${setColorType(type[0].name)}`}>{type[0].name}</span>
                        {type[1] && <span className={`bg-${setColorType(type[1].name)}`}>{type[1].name}</span>}
                    </div>
                    {!isAlreadyCaptured && 
                        <div className="catch-button">
                            <button onClick={openModal}>CATCH!</button>
                        </div>
                    }
                </div>
                <div className="right-conteiner">
                    <div className="stats-conteiner">
                        <h2>Base stats</h2>
                        <div className="stats-list">
                            <div> <span>Attack</span> {data.baseStats.attack}</div>
                            <div> <span>Defense</span> {data.baseStats.defense}</div>
                            <div> <span>HP</span> {data.baseStats.hp}</div>
                            <div> <span>Speed</span> {data.baseStats.speed}</div>
                        </div>
                    </div>
                    <div className="gender-conteiner">
                        <h2>Gender rate</h2>
                        <div className="genders">
                            <div>
                                <span>Male: </span>
                                {data.gender.male}
                            </div>
                            <div>
                                <span>Female: </span>
                                {data.gender.female}
                            </div>
                        </div>
                    </div>
                    <div className="ability-conteiner">
                        <h2>Ability</h2>
                        <h4>{data.abilities.first.name}</h4>
                        <p>{data.abilities.first.desc}</p>
                    </div>
                    {data.moveList &&
                        <div className="moves-conteiner">
                            <h2>Moves</h2>
                            <div className="moves">
                                {data.moveList.map((move, index) => (
                                    <a href={`https://pokemondb.net/move/${move}`} key={index}>
                                        {move}
                                    </a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </main>
        </>
    )
}