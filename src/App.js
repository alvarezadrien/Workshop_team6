import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import de pages
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Formulaire_devis from './pages/Formulaire_devis';

// import code réutilisable
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Avis from './pages/Avis';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Avis" element={<Avis />} />
        <Route path="/Formulaire devis" element={<Formulaire_devis />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
