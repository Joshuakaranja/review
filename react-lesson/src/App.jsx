import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Global cart state
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cartCount={cart.length} /> {/* optional to show cart count */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
