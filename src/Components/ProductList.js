import React from 'react';
import {Link} from 'react-router-dom';

export default function ProductList({itemsToDisplay}) {
    return (
        <div className="productList__container">
            {
                itemsToDisplay.map(item => {
                    return (
                        <Link to={'/products/' + item.id} key={item.id} className="productItem">
                            <div className="productItem__container">
                                <div className="productItem__img">
                                    <img className="productItem__img-img" src={`../s-images/${item.name}.jpg`} alt="product-pic"/>
                                </div>
                                <h3 className="productItem__title">{item.name.split(' ').length > 8 ? item.name.split(' ').slice(0, 7).join(' ') + '...' : item.name}</h3>
                                <span className="productItem__price">{item.price}$</span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
