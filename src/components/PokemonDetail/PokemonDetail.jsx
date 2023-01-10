import "./PokemonDetail.css"
import { setColorType } from "../../common/setColorType"
import { useNavigate } from "react-router-dom"



export default function PokemonDetail({ data, artwork }) {
    const type = data.types
    const image = artwork.find(art => data.key === art.name)
    const navigate = useNavigate()

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
                </div>
            </main>
        </>
    )
}