import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import './App.css';

// Router tells which page to show when you click on a link or change the URL
// Routes has different list of components
// Route tells what should happen when a specific URL is visited, like which component to display

function App() {
  return ( 
    <Router> 
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
