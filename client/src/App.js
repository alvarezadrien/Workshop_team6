import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import de pages
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Formulaire_devis from './pages/Formulaire_devis';
import Bouquetpage from './pages/Bouquetpage';
import Entreprise from './pages/Entreprise';
import Product from './pages/Produit';
import Vasse from './pages/Vasse';
import Abonnement from './pages/Abonnement';

// import code réutilisable
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Avis from './pages/Avis';
import ScrollToTopButton from './pages/Scroll';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bouquets" element={<Bouquetpage />} />
        <Route path="/Entreprise" element={<Entreprise />} />
        <Route path="/Produit" element={<Product />} />
        <Route path="/Vasses" element={<Vasse />} />
        <Route path="/Formulaire devis" element={<Formulaire_devis />} />
        <Route path='/Abonnement' element={<Abonnement />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
