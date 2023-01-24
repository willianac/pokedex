import { useRef } from "react"
import { Link } from "react-router-dom"
import "./Aside.css"

export default function Aside({ change }) {
    const ref = useRef()
    const changeGen = (gen) => {
        change(gen)
    }

    const displayFilter = () => {
        let visibility = ref.current.getAttribute('data-occult')
        if(visibility === 'false') ref.current.setAttribute('data-occult', true)
        if(visibility === 'true') {ref.current.setAttribute('data-occult', false)}
    }
    return(
        <>
            <aside className="aside-conteiner" data-occult="false" ref={ref}>
                <ul className="aside-list">
                    <Link onClick={() => changeGen(1)}>Generation 1</Link>
                    <Link onClick={() => changeGen(2)}>Generation 2</Link>
                    <Link onClick={() => changeGen(3)}>Generation 3</Link>
                    <Link onClick={() => changeGen(4)}>Generation 4</Link>
                </ul>
            </aside>
            <span className="responsive-filter-menu" onClick={displayFilter}>
                <img src="/assets/transparent-nav-menu.png" alt="navmenu icon"/>
            </span>
        </>
    )
}