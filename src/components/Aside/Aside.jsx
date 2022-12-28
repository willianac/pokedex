import { Link } from "react-router-dom"
import "./Aside.css"

export default function Aside({ change }) {
    const changeGen = (gen) => {
        change(gen)
    }

    return(
        <aside className="aside-conteiner">
            <ul className="aside-list">
                <Link onClick={() => changeGen(1)}>Gen 1</Link>
                <Link onClick={() => changeGen(2)}>Gen 2</Link>
                <Link onClick={() => changeGen(3)}>Gen 3</Link>
                <Link onClick={() => changeGen(4)}>Gen 4</Link>
            </ul>
        </aside>
    )
}