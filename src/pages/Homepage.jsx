import React from "react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Première partie */}
      <div className="background-image">
        <div className="info_home1">
          <h1 className="h1_home">Lorem, ipsum.</h1>
          <p className="para1_home">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, quo
          </p>

          {/* Boutons */}
          <div className="button1_home">
            <button>Webshop</button>
            <button>Abonnement</button>
          </div>

          <div className="fleche_bas">
            <img src="../images/down-arrow-alt.svg" alt="Fleche vers le bas" />
          </div>
        </div>
      </div>

      <div className="h2_home">
        <h2>Nos services</h2>
      </div>

      <div className="service">
        <div className="images_services">
          <a href="#">
            <img src="../images/images_boutique.png" alt="" />
            <span>Boutique</span>
          </a>
          <a href="#">
            <img src="../images/images_mariage.svg" alt="" />
            <span>Mariage</span>
          </a>
          <a href="#">
            <img src="../images/images_enterrement.svg" alt="" />
            <span>Enterrement</span>
          </a>
          <a href="#">
            <img src="../images/images_entreprise.svg" alt="" />
            <span>Entreprise</span>
          </a>
          <a href="#">
            <img src="../images/images_portfolio.svg" alt="" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      <div className="h2_home">
        <h2>Nos bouquets</h2>
      </div>
      <div className="para_bouquets">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="bouquets">
        <div className="images_bouquets">
          <a href="#">
            <img src="../images/images_bouquets1.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="#">
            <img src="../images/images_bouquets2.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="#">
            <img src="../images/images_bouquets3.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="#">
            <img src="../images/images_bouquets4.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
