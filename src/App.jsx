import './App.css'
import './mobile.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Hero/Home';
import About from './Components/Hero/About';
import Counter from './Components/Counter/Counter';
import Textpass from './Components/TextPass/Textpass';
import Contact from './Components/Hero/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/textpass" element={<Textpass />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

