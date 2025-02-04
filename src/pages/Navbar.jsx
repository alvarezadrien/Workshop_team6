import React, { useState } from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    const [activePopup, setActivePopup] = useState(null);
    const [activeSubPopup, setActiveSubPopup] = useState(null);

    const handleMouseEnter = (menu) => {
        setActivePopup(menu);
        setActiveSubPopup(null); // Réinitialiser le sous-popup au changement de menu
    };

    const handleMouseLeave = () => {
        setActivePopup(null);
        setActiveSubPopup(null);
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
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('boutique')} onMouseLeave={handleMouseLeave}>
                <a href="Boutique">Boutique</a>
                {activePopup === 'boutique' && (
                    <div className="popup">
                        <a href="/fleurs">Fleurs</a>
                        <a href="/plantes">Plantes</a>
                        <a href="/cadeaux">Cadeaux</a>
                    </div>
                )}
            </div>
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('evenement')} onMouseLeave={handleMouseLeave}>
                <a href="Evénement">Événement</a>
                {activePopup === 'evenement' && (
                    <div className="popup">
                        <a href="/mariages">Mariages</a>
                        <a href="/anniversaires">Anniversaires</a>
                        <a href="/corporate">Corporate</a>
                    </div>
                )}
            </div>
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('apropos')} onMouseLeave={handleMouseLeave}>
                <a href="/Propos">À propos</a>
                {activePopup === 'apropos' && (
                    <div className="popup" onMouseEnter={() => setActiveSubPopup('portfolio')} onMouseLeave={() => setActiveSubPopup(null)}>
                        <a href="/portfolio">Portfolio</a>
                    </div>
                )}
            </div>
            <a href="Contact"><button>Contact</button></a>
            <a href="/Compte">
                <img className="logo_profil" src="../images/profil.png" alt="" />
            </a>
        </div>
    );
};

export default Navbar;