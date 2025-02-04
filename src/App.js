import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import de pages
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';

// import code réutilisable
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
