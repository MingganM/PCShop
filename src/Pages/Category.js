import React, { Component } from 'react';
import {appContext} from '../Context';
import {Link} from 'react-router-dom';
import ProductList from '../Components/ProductList';

export default class Category extends Component {
    static contextType = appContext;
    
    state={
        itemsToDisplay: [],
        prevCategory: 0
    };
    

    setData = (data) => {
        const {match: {params: {category}}} = this.props;

        if(data.length > 0){
            if(this.state.itemsToDisplay.length === 0 || category !== this.state.prevCategory){
                const filteredData = data.filter(dataItem => dataItem.itemType === category);
    
                this.setState({
                    itemsToDisplay: filteredData,
                    prevCategory: category,
                });
            }
        }
    }

    componentDidUpdate(){
        const { productData } = this.context;
        this.setData(productData);
    }
    componentDidMount(){
        const { productData } = this.context;
        this.setData(productData);
    }

    render() {
        const { match: {params: {category}} } = this.props;
        const { itemsToDisplay } = this.state;
        return (
            <section className="productList">
                <h2 className="productList__title">{category}</h2>

                <ProductList itemsToDisplay={itemsToDisplay}/>
            </section>
        )
    }
}
