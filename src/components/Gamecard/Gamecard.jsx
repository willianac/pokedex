import "./Gamecard.css"

export default function Gamecard({ 
    title,
    image,
    region,
    launch,
    text
 }) {
    return (
        <div className="card">
            <img src={image} alt="pokemon fire red cd"/>
            <div className="card-texts">
                <div className="top-dash"></div>
                <div>
                    <h1>
                        {title} <span>({region})</span> 
                    </h1>
                </div>
                <span>Release year: {launch}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}