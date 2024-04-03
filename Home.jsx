import React, { useState } from 'react';
import data from '../assets/product.json';
import { Food } from './Food';

export const Home = () => {
    const [products] = useState(data);

    return (
        <div className='product-container'>
            {products.map((product) => (
                <Food key={product.id} product={product}/>
            ))}
        </div>
    );
};
