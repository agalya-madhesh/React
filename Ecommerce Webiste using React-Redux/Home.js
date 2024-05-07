import React from 'react'
import Product from '../Components/Product';
import About from '../Components/About';
import Contact from '../Components/Contact';

function Home() {
  return (
   <>
   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Assets/image2.jpg" class="d-block w-100" alt="Iphone" height="700px"/>
    </div>
    <div class="carousel-item">
      <img src="/Assets/image3.avif" class="d-block w-100" alt="Iphone" height="700px"/>
    </div>
    <div class="carousel-item">
      <img src="/Assets/image4.jpg" class="d-block w-100" alt="Iphone" height="700px" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <Product/>
  <About/>
  <Contact/>
</div>
   </>
  )
}

export default Home