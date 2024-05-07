import {Routes, Route} from 'react-router-dom';
import './App.css';
import './index.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import Header from './Components/Header';
// import Footer from './Components/Footer'


function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
