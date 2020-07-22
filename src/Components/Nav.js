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
                        <Link to="">Home</Link>
                    </li>

                    <li className="nav__li">
                        <a>Products <FaArrowDown /></a>

                        <div className="nav__li-links">
                            <Link to="/">Motherboard</Link>
                            <Link to="/">RAM</Link>
                            <Link to="/">Case</Link>
                            <Link to="/">Graphics Card</Link>
                            <Link to="/">CPU / Processors</Link>
                        </div>
                    </li>

                    <li className="nav__li">
                        <Link to='/'>Cart <FaShoppingCart /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
