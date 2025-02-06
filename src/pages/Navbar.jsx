import React, { useState } from "react";
import "../styles/Navbar.css";

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
          src="../images/flower_shop_logo.svg"
          alt="Logo site fleuriste"
        />
      </a>
      <div className="links_nav">
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("boutique")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="Boutique">Boutique</a>
          {activePopup === "boutique" && (
            <div className="popup_nav">
              <a href="/Bouquets">Bouquets</a>
              <a href="/plantes">Vasses</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("evenement")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="Evénement">Événement</a>
          {activePopup === "evenement" && (
            <div className="popup_nav">
              <a href="/mariages">Mariages</a>
              <a href="/Funeraille">Funérailles</a>
              <a href="/Entreprise">Entreprises</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("apropos")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/Propos">À propos</a>
          {activePopup === "apropos" && (
            <div
              className="popup_nav"
              onMouseEnter={() => setActiveSubPopup("portfolio")}
              onMouseLeave={() => setActiveSubPopup(null)}
            >
              <a href="/portfolio">Portfolio</a>
            </div>
          )}
        </div>
        <a href="Contact">Contact</a>
      </div>

      <div className="links_img_nav">
        <a href="/Compte">
          <img className="logo_profil" src="../images/user-circle.svg" alt="" />
        </a>
        <a href="/Achat">
          <img src="../images/basket.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
