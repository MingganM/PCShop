import React, { Component } from 'react';
import {appContext} from '../Context';
import ProductList from '../Components/ProductList';
import Filter from '../Components/Filter';

export default class Category extends Component {
    static contextType = appContext;
    
    state={
        itemsToDisplay: [],
        prevCategory: null,
        sortBy: "position"
    };
    

    setData = (data) => {
        const {match: {params: {category}}} = this.props;

        if(data.length > 0){
            if(this.state.itemsToDisplay.length === 0 || category !== this.state.prevCategory){
                const filteredData = data.filter(dataItem => dataItem.itemType === category);
    
                this.setState({
                    itemsToDisplay: filteredData,
                    prevCategory: category,
                }, this.filterData);
            }
        }
    }

    handleFilter = (e) => {
        const { target: { value } } = e;
        
        this.setState({
            sortBy: value
        }, this.filterData)
    }

    filterData = () => {
        const { sortBy } = this.state;

        if(sortBy === "position") return;
        else {
            this.setState({
                itemsToDisplay: this.sortData(sortBy)
            });
        }
    }

    sortData = (value) => {
        const { itemsToDisplay } = this.state;
        const sortedItems = itemsToDisplay.sort((prev, cur)=> prev.price - cur.price);
        
        if(value === 'low'){
            return [...sortedItems];
        }
        else {
            return [...sortedItems.reverse()]
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

                <Filter handleFilter={this.handleFilter} />
                <ProductList itemsToDisplay={itemsToDisplay}/>
            </section>
        )
    }
}
