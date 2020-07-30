import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Categories from '../Components/Categories';
import {FaTruck, FaTag, FaCheck, FaHandHoldingUsd} from 'react-icons/fa'; 

export default class Home extends Component {
    render() {
        return (
            <section className="home">
                <div className="hero">
                    <div className="hero__container">
                        <div className="hero__info">
                            <h2 className="hero__info-title">build your dream pc sooner</h2>
                            <p className="hero__info-text">PC Shop sells variety of cheap and quality products</p>
                            <Link to="/Get-Started" className="hero__info-link">Get Started</Link>
                        </div> 

                        <div className="hero__img">
                            <div className="hero__img-img"></div>
                        </div>
                    </div>
                </div>

                <Categories />

                <div className="services">
                    <article className="service">
                        <span className="service__icon">
                           <FaTruck size="2rem" color="var(--secondary)" /> 
                        </span>
                        <h3 className="service__title">Free Delivery</h3>
                        <p className="service__text">We deliver your products without any delivery charge</p>
                    </article>

                    <article className="service">
                        <span className="service__icon">
                           <FaTag size="2rem" color="var(--secondary)" /> 
                        </span>
                        <h3 className="service__title">High Discounts</h3>
                        <p className="service__text">Regular customers will be given huge discounts on each product</p>
                    </article>

                    <article className="service">
                        <span className="service__icon">
                           <FaCheck size="2rem" color="var(--secondary)"/> 
                        </span>
                        <h3 className="service__title">Quality Items</h3>
                        <p className="service__text">We sell high quality and well tested products</p>
                    </article>

                    <article className="service">
                        <span className="service__icon">
                           <FaHandHoldingUsd size="2rem" color="var(--secondary)" /> 
                        </span>
                        <h3 className="service__title">Extended Warranties</h3>
                        <p className="service__text">We provide each item with a longer warranty time</p>
                    </article>
                </div>
            </section>
        )
    }
}
