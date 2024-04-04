import React, { useState } from 'react';
import data from '../assets/product.json';
import { Food } from './Food';
import "./Home.css";

export const Home = ({cart,setCart}) => {
    const [products] = useState(data);

    return (
        <div className='product-container'>
            {products.map((product) => (
                <Food key={product.id} product={product} cart={cart} setCart={setCart}/>
            ))}
        </div>
    );
};
