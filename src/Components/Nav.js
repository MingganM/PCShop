import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaArrowDown, FaShoppingCart} from 'react-icons/fa';

export default function Nav({toggleNav}) {
    return (
        <nav className="nav">
            <div className="nav__container">
                <Link to="/" className="nav__logo">
                    <img src="./images/logo.png" alt="Logo"/>
                </Link>

                <button onClick={toggleNav} className="nav__btn">
                    <FaBars />
                </button>

                <ul className="nav__ul">
                    <li className="nav__li">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav__li">
                        <a>Products <FaArrowDown /></a>

                        <div className="nav__li-links">
                            <Link to="/Category/motherboard">Motherboard</Link>
                            <Link to="/Category/ram">RAM</Link>
                            <Link to="/Category/case">Case</Link>
                            <Link to="/Category/gpu">Graphics Card</Link>
                            <Link to="/Category/cpu">CPU / Processors</Link>
                            <Link to="/Category/psu">Power Supply</Link>
                            <Link to="/Category/storage">Storage</Link>
                        </div>
                    </li>

                    <li className="nav__li">
                        <Link to='/Cart'>Cart <FaShoppingCart /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
