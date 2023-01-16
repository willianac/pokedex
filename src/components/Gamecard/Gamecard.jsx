import "./Gamecard.css"

export default function Gamecard() {
    return (
        <div className="card">
            <div className="card-img">
                <img src="https://m.media-amazon.com/images/I/61XjZ8DvaFL.jpg" alt="pokemon fire red cd"/>
            </div>
            <div className="card-texts">
            <div className="test"></div>
                <div>
                    <h1>Pokemon Fire Red</h1>
                    <span>(Kanto)</span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>
    )
}