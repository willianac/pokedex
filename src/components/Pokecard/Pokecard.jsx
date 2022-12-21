import "./Pokecard.css"
import { setColorType } from "../../common/setColorType"

export default function Pokecard({ data }) {
    const type = data.types
    
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
                        <h3 className={setColorType(type[0].name)}>{type[0].name}</h3>
                        {type[1] && <h1>.</h1>}
                        {type[1] && <h3 className={setColorType(type[1].name)}>{type[1]?.name}</h3>}
                    </span>
                </div>
            </div>
        </div>
    )
}