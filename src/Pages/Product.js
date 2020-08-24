import React, { Component } from 'react';
import {appContext} from '../Context';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

export default class Product extends Component {
    static contextType = appContext;
    state = {
        product: null
    }

    getProduct(id){
        const { productData } = this.context;

        if(!this.state.product && productData.length > 0){
            const newProduct = productData.find(product => product.id === id);
            this.setState({
                product: newProduct
            })
        }
    }

    componentDidUpdate(){
        const {match: {params: {product}}} = this.props;
        this.getProduct(parseInt(product));
    }
    componentDidMount(){
        const {match: {params: {product}}} = this.props;
        this.getProduct(parseInt(product));
    }

    closeNotice = () => { 
        document.querySelector('.singleProduct__notice').style.display = "none";
    }

    render() {
        const {product} = this.state;
        const {addToCart} = this.context;
        const features = product ? Object.keys(product.features): null;
        return (
            product ? (
                <section className="singleProduct">
                    
                    <div className="singleProduct__container">
                        <div className="singleProduct__img">
                            <img src={`../images/${product.name}.jpg`}/>
                        </div>

                        <div className="singleProduct__info">
                            <h3 className="singleProduct__name">Name: {product.name}</h3>
                            <h4 className="singleProduct__type">Type: {product.itemType}</h4>
                            <p className="singleProduct__price">Price: {product.price}$</p>
                        </div>
                    </div>

                    <div className="singleProduct__specs">
                    
                        <div className="singleProduct__specs-container">
                            <h2 className="singleProduct__specs-title">Specs</h2>
                        {
                            features.map((feature, index) => (
                                <span key={index} className="singleProduct__feature">
                                    <h4 className="singleProduct__feature-title">{feature}:</h4>
                                    <p className="singleProduct__feature-value">{product.features[feature].toString()}</p>
                                </span>
                            ))
                        }
                        </div>
                        <div className="singleProduct__buy">
                            <button onClick={() => addToCart(product.id)} className="singleProduct__buy-btn">Add To Cart</button>
                            <p className="singleProduct__buy-text">Own Now, Pay Later</p>
                        </div>

                    </div>

                    <div className="singleProduct__notice">

                        <div className="singleProduct__notice-container">
                            <div className="singleProduct__notice-icon">
                                <FaCheckCircle />
                            </div>

                            <div className="singleProduct__notice-img">
                                <img src={`../s-images/${product.name}.jpg`} alt=""/>
                            </div>

                            <div className="singleProduct__notice-info">
                                <h3 className="singleProduct__notice-title">{product.name}</h3>
                            </div>

                            <div className="singleProduct__notice-links">
                                <Link to="/Cart" onClick={this.closeNotice}>Cart</Link>
                                <Link to="/" onClick={this.closeNotice}>Home</Link>
                            </div>
                        </div>

                    </div>
                </section>
            ) :
            (
                <h2 className="loading">Loading Item...</h2>
            )
            
        )
    }
}
