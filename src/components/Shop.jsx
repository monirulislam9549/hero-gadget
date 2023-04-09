import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';
import { ProductContext } from '../App';

const Shop = () => {

    const products = useContext(ProductContext)

    const handleAddToCart = (id) => {
        addToDb(id)
    }

    return (
        <div className='grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;