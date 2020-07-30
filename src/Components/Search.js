import React from 'react';

export default function Search({handleSearch, handleSubmit}) {
    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__container">
                <input onChange={handleSearch} type="text" id="searchInput" className="search__input"/>
                <label className="search__label" htmlFor="searchInput">Search Items</label>
            </div>
            <input type="submit" className="search__submit" value="Search"/>
        </form>
    )
}
