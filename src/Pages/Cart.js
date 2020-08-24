import React, { Component } from 'react';
import {appContext} from '../Context';
import {FaTrash} from 'react-icons/fa';

export default class Cart extends Component {
    static contextType = appContext;

    render() {
        const { cartItems ,cartConfigHandler, totalPrice, tax, removeFromCart, clearCart } = this.context;

        return cartItems.length > 0 ? (
            <section className="cart">
                <div className="cart__container">
                    
                    {
                        cartItems.map(item => (
                            <div key={item.id} className="cartItem">
                                <div className="cartItem__img">
                                    <img src={`../s-images/${item.name}.jpg`} alt="item-photo"/>
                                </div>

                                <div className="cartItem__info">
                                    <h3 className="cartItem__name"> {item.name}</h3>
                                    <span className="cartItem__config">

                                        <button onClick={()=> cartConfigHandler(item.id, "decrement")} className="cartItem__btn">-</button>
                                        <span className="cartItem__amount">{item.count}</span>
                                        <button onClick={()=> cartConfigHandler(item.id, "increment")} className="cartItem__btn">+</button>

                                    </span>
                                    <p className="cartItem__price">Price: {item.price * item.count}$</p>
                                    <span onClick={() => removeFromCart(item.id)} className="cartItem__delete"><FaTrash /></span>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="cart__additional">
                    <article className="cart__remove">
                        <span onClick={clearCart} className="cart__remove-btn">Remove All Items</span>
                    </article>

                    <article className="cart__totals">
                        <h3>Total: {totalPrice + parseInt(tax)}$</h3>
                        <h3>Tax: {tax}$</h3>
                    </article>
                </div>
            </section>
        )
        : (
            <h2 class="cart-empty">Cart Is Empty </h2>
        )
    }
}
