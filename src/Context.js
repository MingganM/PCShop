import React, { Component } from 'react';
import { createClient } from 'contentful';

export const appContext = React.createContext();
export const ContextConsumer = appContext.Consumer;

export default class Context extends Component {
    
    state = {
        productData: [],
        cartItems: [],
        totalPrice: 0,
        tax: 0,
        searchValue: "",
        searchedItems: []
    }

    componentDidMount(){
        this.getData();
    }

    calculateAmount(){
        const newTotalPrice = this.state.cartItems.reduce((total, cur) => (total + cur.price) * cur.count ,0);
        const tax = (newTotalPrice * 0.1).toFixed(2);

        this.setState({
            totalPrice: newTotalPrice,
            tax
        })
    }

    getData = () => {
        const client = createClient({
            space: 's1jy5iz3hwru',
            accessToken: 'ppgrA0oazXLGJ3kymXWEMCyZB28xeUNVw-o5zgUsfyU'
        });
          
        client.getEntries({
            content_type: 'pcShop'
        })
        .then(data => {
            this.setState({
                productData: data.items[0].fields.productData
            })
        })
        
    }

    addToCart = (id) => {
        const {productData, cartItems} = this.state;
        const choosenItem = productData.find(product => product.id === id);
        const cartList = cartItems.map(item => item.id);
        let newCartItems = [];

        // DISPLAYS NOTIFICATION:
        document.querySelector('.singleProduct__notice').style.display = 'block';

        if(cartList.includes(choosenItem.id)){
            return;
        }
        else{
            newCartItems = [...cartItems, {...choosenItem}];
            console.log(cartItems.includes(choosenItem));
        }

        this.setState({
            cartItems: newCartItems
        }, this.calculateAmount);
    }

    removeFromCart = (id) => {
        const newCartItems = this.state.cartItems.filter(item => item.id !== id);
        this.setState({
            cartItems: newCartItems
        }, this.calculateAmount);
    }

    clearCart = () => {
        this.setState({
            cartItems: []
        })
    }

    cartConfigHandler = (id, type) => {
        const acquiredItem = this.state.cartItems.find(item => item.id === id);
        type === "increment" ? acquiredItem.count++ : acquiredItem.count--;
        if(acquiredItem.count > 0){
            const newCartItems = this.state.cartItems.map(item => item.id === id ? {...acquiredItem} : item);

            this.setState({
                cartItems: newCartItems
            },this.calculateAmount);
        }else{
            const newCart = this.state.cartItems.filter(item => item !== acquiredItem);
            this.setState({
                cartItems: newCart
            })
        }
    }

    handleSearch = (e) => {
        const { target } = e;

        if(target.value) document.querySelector('.search__label').classList.add('search__active');
        else document.querySelector('.search__label').classList.remove('search__active');

        this.setState({
            searchValue: target.value
        });
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();

        const { searchValue, productData } = this.state;
        
        if(searchValue === '') return;

        const modifiedSearchVal = searchValue.toLowerCase();
        const newSearchData = productData.filter(item => item.name.toLowerCase().includes(modifiedSearchVal));

        this.setState({
            searchedItems: newSearchData
        }, () => console.log(this.state.searchedItems));
    }


    render() {
        const valueData = {
            ...this.state,
            addToCart: this.addToCart,
            cartConfigHandler: this.cartConfigHandler,
            removeFromCart: this.removeFromCart,
            clearCart: this.clearCart,
            handleSearch: this.handleSearch,
            handleSearchSubmit: this.handleSearchSubmit
        }
        return (
            <appContext.Provider value={valueData}>
                {
                    this.props.children
                }
            </appContext.Provider>
        )
    }
}
