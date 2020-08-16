import React from 'react'

export default function Filter({handleFilter}) {
    return (
        <div className="filter">
            <h3 className="filter__title">Filter</h3>

            <div className="filter__container">

                <div className="filter__item">
                    <span className="filter__item-type">
                        Sort By: 
                    </span>

                    <select onChange={handleFilter} className="filter__select">
                        <option value="position">Position</option>
                        <option value="low">Price: Low To High</option>
                        <option value="high">Price: High To Low</option>
                    </select>
                </div>

            </div>
        </div>
    )
}
