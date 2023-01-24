import "./searchInput.css"

export default function SearchInput({ searchChange }) {
    return (
        <div className="search-bar">
            <input type="search" className="search-field" placeholder="Search" onChange={searchChange}/>
            <img src="/assets/search-symbol.png" alt="a search symbol"/>
        </div>
    )
}