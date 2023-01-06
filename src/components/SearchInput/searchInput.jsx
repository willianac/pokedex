import "./searchInput.css"


export default function SearchInput() {
    return (
        <div className="search-bar">
            <input type="search" className="search-field" placeholder="Search"/>
            <img src="/assets/search-symbol.png" alt="a search symbol"/>
        </div>
    )
}