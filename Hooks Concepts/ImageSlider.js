import React, { useState } from 'react';

function ImageSlider() {
  const images = [ // Array of image URLs for the slider
    'https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/757241/pexels-photo-757241.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/1469061876/photo/rainbow-at-sunset-beach-oahu-hawaii.webp?s=1024x1024&w=is&k=20&c=SC2ir3je2V8Zba_YE98zieZLL7CG0-8p6iUGgov8h9Y='
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to keep track of the current image index

  const nextSlide = () => { // Function to display the next image
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => { // Function to display the previous image
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Image Slider</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={prevSlide}>Previous</button>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} style={{ maxWidth: '400px', maxHeight: '300px', margin: '0 10px' }} />
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;
