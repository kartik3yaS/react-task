import "./Filter.css";

const Filter = ({search, setSearch}) => {
    return(
        <div className="filter">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Items</label>
                <input 
                    type="text"
                    id="search"
                    placeholder="Search Items"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Filter;