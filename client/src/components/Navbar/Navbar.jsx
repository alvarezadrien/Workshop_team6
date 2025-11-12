import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [activeSubPopup, setActiveSubPopup] = useState(null);

  const handleMouseEnter = (menu) => {
    setActivePopup(menu);
    setActiveSubPopup(null); // Ferme tout sous-menu lorsqu'un menu est survolé
  };

  const handleMouseLeave = () => {
    setActivePopup(null);
    setActiveSubPopup(null); // Ferme tout lorsque le survol est terminé
  };

  return (
    <div className="navbar">
      <a href="/">
        <img
          className="logo_site"
          src="../images/new_logo.png"
          alt="Logo site fleuriste"
        />
      </a>
      <div className="links_nav">
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("boutique")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/Bouquets">Boutique</a>
          {activePopup === "boutique" && (
            <div className="popup_nav">
              <a href="/Bouquets">Bouquets</a>
              <a href="/Vasses">Vases</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("evenement")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/Entreprise">Événement</a>
          {activePopup === "evenement" && (
            <div className="popup_nav">
              <a href="/Mariages">Mariages</a>
              <a href="/Funerailles">Funérailles</a>
              <a href="/Entreprise">Entreprises</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("apropos")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/Formulaire devis">À propos</a>
          {activePopup === "apropos" && (
            <div
              className="popup_nav"
              onMouseEnter={() => setActiveSubPopup("portfolio")}
              onMouseLeave={() => setActiveSubPopup(null)}
            >
              <a href="/Formulaire devis">Demande de devis</a>
            </div>
          )}
        </div>
        <a href="Contact">Contact</a>
      </div>

      <div className="links_img_nav">
        <a href="/Connection">
          <img
            className="logo_profil"
            src="../images/user_profil.svg"
            alt=""
            width={40}
          />
        </a>
        <a href="/Achat">
          <img src="../images/basket_shop.svg" alt="" width={40} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
