import React from 'react';
import "./Food.css";

export const Food = ({ product, cart, setCart }) => {

  const addCart = () => {
    setCart([...cart,product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !==product.id));
  };

  return (
    <div className='product'>
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs : {product.amount} </p>
        {cart.includes(product)?
        <button className='btn-remove' onClick={removeCart}>Remove from cart</button> : 
        <button onClick={addCart}>Add to cart</button>
        }
      </div>
    </div>
  );
};
