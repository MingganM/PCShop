import React from 'react';
import Search from '../Components/Search';
import Categories from "../Components/Categories";
import { ContextConsumer } from '../Context';
import ProductList from '../Components/ProductList';

export default function StartPoint() {
    return (
        <section className="startPoint">
            <ContextConsumer>
                {
                    valueData => {
                        const { handleSearch, handleSearchSubmit, searchedItems } = valueData;
                        return (
                            <>
                                <Search handleSearch={handleSearch} handleSubmit={handleSearchSubmit}/>
                                <ProductList itemsToDisplay={searchedItems}/>
                                <Categories />
                            </>
                        )
                    }
                }
            </ContextConsumer>
            
        </section>
    )
}
