import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <nav>
            <div className="nav-logo">
                <h1>Pokedex</h1>
            </div>
            <div className="nav-links">
                <NavLink end to="/" className={({ isActive }) => isActive ? "active-nav-link" : 'nav-link'}>Jogos</NavLink>
                <NavLink to="/test" className={({ isActive }) => isActive ? "active-nav-link" : 'nav-link'}>Pokedex</NavLink>
                <NavLink to="/ops" className={({ isActive }) => isActive ? "active-nav-link" : 'nav-link'}>Videos</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;