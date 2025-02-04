import React, { useState } from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
        <a href="/"
          ><img
            className="logo_site"
            src="../images/flower_shop_logo.svg"
            alt="Logo site fleuriste"
        /></a>
        <a href="Boutique">Boutique</a>
        <a href="Evénement">Evénement</a>
        <a href="/Propos">À propos</a>
        <a href="Contact"><button>Contact</button></a>
        <a href="/Compte"><img className="logo_profil" src="../images/profil.png" alt="" /></a>
      </div>
    );
};

export default Navbar;



