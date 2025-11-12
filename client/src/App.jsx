import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import de pages
import Homepage from "./components/pages/Accueil/Homepage";
import Abonnement from "./components/pages/Abonnement/Abonnement";

// Import Pages connection
import Connection from "./components/pages/Connection/Connection";
import Inscription from "./components/pages/Connection/Inscription/Inscription";
import MotDePasseOublie from "./components/pages/Connection/MotDePasseOublie/MotDePasseOublie";

// Import Pages contact
import Formulaire_devis from "./components/pages/Contact/Devis/Formulaire_devis";
import Contact from "./components/pages/Contact/Contact/Contact";

// Import pages Événement
import Entreprise from "./components/pages/Evenement/Entreprise/Entreprise";
import Mariage from "./components/pages/Evenement/Mariage/Mariage";

// Import Carte produit
import Bouquetpage from "./components/pages/Bouquetpage";
import Product from "./components/pages/Produit";
import Vasse from "./components/pages/Vasse";

// import code réutilisable
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/Widgets/BtnScroll/Scroll";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bouquets" element={<Bouquetpage />} />
        <Route path="/Entreprise" element={<Entreprise />} />
        <Route path="/Mariages" element={<Mariage />} />
        <Route path="/Produit" element={<Product />} />
        <Route path="/Vasses" element={<Vasse />} />
        <Route path="/Formulaire devis" element={<Formulaire_devis />} />
        <Route path="/Abonnement" element={<Abonnement />} />
        <Route path="/Connection" element={<Connection />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Mot de passe oublié" element={<MotDePasseOublie />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
