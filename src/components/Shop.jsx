import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const productData = useLoaderData()
    console.log(productData);
    return (
        <div>
            <h1>Shop</h1>
        </div>
    );
};

export default Shop;