import { useRef } from "react"
import { Link } from "react-router-dom"
import "./Aside.css"
const NUMBER_OF_GENERATIONS = 4
const arrayOfLinks = Array.from(Array(NUMBER_OF_GENERATIONS).keys())

export default function Aside({ change }) {
    const ref = useRef()
    const changeGen = (gen) => {
        return () => change(gen)
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
                    {arrayOfLinks.map((link) => {
                        const genIndex = link + 1;
                        return <Link onClick={changeGen(genIndex)} key={link}>Generation {genIndex}</Link>
                    })}  
                </ul>
            </aside>
            <span className="responsive-filter-menu" onClick={displayFilter}>
                <img src="/assets/transparent-nav-menu.png" alt="navmenu icon"/>
            </span>
        </>
    )
}