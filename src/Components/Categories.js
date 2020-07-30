import React from 'react';
import {Link} from 'react-router-dom';

export default function Categories() {
    return (
        <div className="categories">
            <Link to="/Category/motherboard" className="category">
                <h3 className="category__title">Motherboard</h3>
            </Link>

            <Link to="/Category/ram" className="category">
                <h3 className="category__title">RAM</h3>
            </Link>

            <Link to="/Category/case" className="category">
                <h3 className="category__title">Case</h3>
            </Link>

            <Link to="/Category/gpu" className="category">
                <h3 className="category__title">Graphics Cards</h3>
            </Link>

            <Link to="/Category/cpu" className="category">
                <h3 className="category__title">CPU</h3>
            </Link>

            <Link to="/Category/psu" className="category">
                <h3 className="category__title">PSU</h3>
            </Link>

            <Link to="/Category/storage" className="category">
                <h3 className="category__title">Storage</h3>
            </Link>
        </div>
    )
}
