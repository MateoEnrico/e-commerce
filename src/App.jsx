// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import Financing from './components/Financing/Financing.jsx';
import Brands from './components/Brands/Brands.jsx';
import Sponsors from './components/Sponsors/Sponsors.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/financiaciones" element={<Financing />} />
          <Route path="/marcas" element={<Brands />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;