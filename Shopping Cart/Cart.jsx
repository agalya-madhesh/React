import React, { useEffect, useState } from 'react';
import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + parseInt(curr.amount), 0))
  }, [cart]);
  return (
    <>
      <h2 className='cart-header'>Cart Products</h2>
      <div className='cart-container'>
        {
          cart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.image} alt='image' />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Price : {product.amount}</p>
              </div>
            </div>
          ))
        }
      </div>
      <h2>Total amout Rs : {total}</h2>
    </>
  )
}
