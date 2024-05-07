import React from 'react'
import {useParams} from 'react-router-dom';//to get the ID from the URL and then using that ID to filter the product details from your data
//to build a page that shows the details of a specific product based on its ID,useParams helps in grabing the id 
//from the URL to fetch and display the details of that particular product
import Data from '../Data'
import { useState } from 'react';

function ProductDetail() {
    const[cartBtn, setCartBtn] = useState("Add to Cart") //to change the text of button we use useState

    const proid = useParams();
    const proDetail = Data.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const handleCart = (product) => {
        if(cartBtn === "Add to Cart"){
            setCartBtn("Remove from Cart")
        }
        else{
            setCartBtn("Add to Cart")
        }
    }
   
    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product py-5">
                    <img src={product.img} alt={product.title} height="400px"/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center ">
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr/>
                    <h2 className='my-4'> {product.price}</h2>
                    <p className='lead'>{product.description}</p>
                    <button onClick={ () => handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
  )
}

export default ProductDetail