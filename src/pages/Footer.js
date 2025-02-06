import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        {/* Logo à gauche */}
        <div className="logo_footer">
          <a href="/">
            <img
              className="logo_site_footer"
              src="../images/flower_shop_logo.svg"
              alt="Logo site fleuriste"
            />
          </a>
        </div>

        {/* Liens centrés */}
        <div className="links_footer">
          <ul>
            <li>
              <a href="/Bouquets">Boutique</a>
            </li>
            <li>
              <a href="/Mariage">Mariage</a>
            </li>
            <li>
              <a href="/Entreprise">Entreprise</a>
            </li>
            <li>
              <a href="/Funerailles">Funérailles</a>
            </li>
            <li>
              <a href="/Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Icône Instagram à droite */}
        <div className="logo_insta">
          <a href="https://www.instagram.com/fabrique_en_fleur/">
            <img
              className="logo_insta_img"
              src="../images/instagram.svg"
              alt="Logo Instagram"
            />
          </a>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="footer_hr" />

      {/* Copyright */}
      <div className="footer_copyright">
        <p>&copy; 2025 Fabrique en fleurs Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
