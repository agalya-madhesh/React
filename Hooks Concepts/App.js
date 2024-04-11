
import React, { useState } from 'react';
import './App.css';
import './Components/Todo.css';
import Counter from "./Components/Practice.js"; 
import Todolist from './Components/Todolist.js';
import ImageSlider from './Components/ImageSlider.js'; 
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  const [showImageSlider, setShowImageSlider] = useState(false);
  // showImageSlider controls whether the image slider should be displayed or not
  // setShowImageSlider function updates the value of showImageSlide
  // for usestate we have set false which is the initial value of showImageSlider

  return ( // Router tells which page to show when you click on a link or change the URL
     <Router>
      <div className="container">
        <div className="counts">
          <Counter />
        </div>
        <div className="tasks">
          <Todolist />
        </div>
        <div className='imageslider'>
        <button onClick={() => setShowImageSlider(true)}>Show Image Slider</button> 
        </div>
        {showImageSlider && <ImageSlider />} 
      </div>
      </Router>
    // when the buttonis clicked the arrow function  sets the state variable showImageSlider 
    //to true, indicating that the image slider should be shown

    //{showImageSlider && <ImageSlider />} - this conditional statement tells that if showImageSlider is true, 
    //the ImageSlider component will be displayed on the page, if its false it won't be displayed
  );
}

export default App;
