import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    let refe = useRef()
    const slideMenu = (e) => {
        let visibility = refe.current.getAttribute('data-hidden')
        if(visibility === 'false') refe.current.setAttribute('data-hidden', true)
        if(visibility === 'true') {refe.current.setAttribute('data-hidden', false)}
        
    }
    return (
        <nav>
            <div className="nav-logo">
                <img src="./assets/pokeball.png" alt="one pokeball"/>
                <h1>Pokedex</h1>
            </div>
            <NavLink className="responsive-menu" onClick={(e) => slideMenu(e)}> 
                <img src="./assets/transparent-nav-menu.png" alt="navmenu icon"/> 
            </NavLink>
            <div className="nav-links" data-hidden="true" ref={refe}>
                <NavLink end to="/" className={({ isActive }) => isActive ? "active-nav-link" : 'nav-link'}>Pokedex</NavLink>
                <NavLink to="/test" className={({ isActive }) => isActive ? "active-nav-link" : 'nav-link'}>Jogos</NavLink>
                <NavLink to="/ops" className={({ isActive }) => isActive ? "active-nav-link" : 'nav-link'}>Videos</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;