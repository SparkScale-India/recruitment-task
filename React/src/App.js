import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Recruitment from './pages/Recruitment.js';// Use the new page
import Clients from './components/FeaturedClients.js';
import './styles/style.css';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recruitment" element={<Recruitment />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;