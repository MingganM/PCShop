import React, { Component } from 'react';
import { createClient } from 'contentful';

export const appContext = React.createContext();
export const ContextConsumer = appContext.Consumer;

export default class Context extends Component {
    
    state = {
        productData: []
    }

    componentDidMount(){
        this.getData();
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

    render() {
        
        return (
            <appContext.Provider>
                {
                    this.props.children
                }
            </appContext.Provider>
        )
    }
}
