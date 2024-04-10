import React, { useState } from 'react'; //Here useState keeps track of which image is currently being displayed

const images = [ //this is an array containing different images
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    //current is the state value
    //setCurrent is the function that updates current state value that is (images) 
    //current is set to 0, so the first image in the images array will be displayed when we run 

    function nextSlide() { //nextSlide is a function for moving to next image 
        setCurrent(current === images.length - 1 ? 0 : current + 1);
        //images.length-1 indicates that we are in the last image
        //if we are the in the last image it shows the first image (if condition is true)
        //if we are not in the last image it shows the next image (if condition is false)
        //(i.e),// If we're at the last image in the array,
        // reset to the first image; otherwise, move to the next image


        function prevSlide() {
            // Check if the current image is the first one (index 0)
            setCurrent(current === 0 ? images.length - 1 : current - 1);
            // If it is the first image, set the current image to the last one in the images array
            // Otherwise, decrement the current image index by 1 to show the previous image
        }
    return (
        <div>
            <h2>Image Slider</h2>
            <div className="slider">
                <div className="left-arrow" onClick={prevSlide}>
                    ⬅
                </div>
                <div className="right-arrow" onClick={nextSlide}>
                    ➡
                </div>

                {images.map( //Mapping over the images array to display images 
                    (image, index) =>
                        //Check if the current image index matches the index being iterated over
                        current === index && (
                            // If it matches then render the image within a slide container
                            <div key={image} className="slide">
                                <img src={image} alt={`Slide ${index}`} />
                            </div>
                        )
                )}
            </div>
        </div>
    );
    }
}

export default ImageSlider;
