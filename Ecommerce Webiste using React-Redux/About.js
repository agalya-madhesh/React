import React from "react";
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to Apple Mart! At Apple Mart, we're dedicated to providing
              you with the latest and greatest in Apple products and
              accessories. Our mission is to bring the innovation and quality of
              Apple products to our customers, making technology accessible to
              everyone. Apple Mart was established in 1992 with a vision to
              create a destination where Apple enthusiasts could find everything
              they need in one place. Founded by a team of tech enthusiasts, we
              set out to build a community-driven space where customers could
              explore, learn, and shop for their favorite Apple products. Since
              our inception, we've grown from a small storefront to a leading
              retailer of Apple products in our region. We're proud to have
              served thousands of customers, each contributing to our journey of
              growth and success. We're passionate about Apple products and their
              potential to enhance people's lives. Our
              customers are at the heart of everything we do. 
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src="/Assets/abt.avif" alt="About us" className="img-fluid" style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
