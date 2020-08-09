import React from 'react';
import Navbar from '../src/components/navbar/navbar.js'
import Front from '../src/components/front/front.js';
import TheExperience from '../src/components/theExperience/TheExperience.js';
import FixedBackground from '../src/components/fixedBackground/fixedBackground.js';
import FixedBackground2 from '../src/components/fixedBackground2/fixedBackground2.js';
import Product from '../src/components/product/Product.js';
import GetInspired from '../src/components/getInspired/getInspired.js';
import Gallery from '../src/components/gallery/gallery.js';
import Contact from "../src/components/contact/contact.js";
import './styles/main.css';



function App() {
  return (
    <div className="App">
      
      <Front />
      <TheExperience />
      <FixedBackground />
      <Product />
      {/*  */}
      <FixedBackground2 />
      <GetInspired />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
