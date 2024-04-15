import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home'; 
import Projects from './Components/Projects'; 
import Experience from './Components/Experience';
import Navbar from './Components1/Navbar';
import Footer from './Components1/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Experience" element={<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
