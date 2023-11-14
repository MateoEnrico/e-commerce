// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Financing from './Components/Financing/Financing';
import Brands from './Components/Brands/Brands';
import Sponsors from './Components/Sponsors/Sponsors';

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