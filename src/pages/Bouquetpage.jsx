import React from "react";
import "../styles/Bouquetpage.css";

const Bouquetpage = () => {
  return (
    <div className="homepage-container">
      {/* Première partie */}
      <div className="background-image">
        <div className="info_home1">
          <h1 className="h1_home">Fabrique en Fleurs</h1>
          <p className="para1_home">
            Des bouquets uniques, une expérience florale sur-mesure.
          </p>

          {/* Boutons */}
          <div className="button1_home">
            <button>
              <a href="/Abonnement">Abonnement</a>
            </button>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="h2_home">
        <h2>Nos bouquets</h2>
      </div>
      <div className="para_bouquets">
        Des bouquets uniques, une expérience florale sur-mesure.
      </div>
      {/* Affichage des bouquets */}
      <div className="bouquets">
        <div className="images_bouquets_page">
          <a href="/Produit">
            <img src="../images/images_bouquets1.png" alt="Bouquet 1" />
            <span>produit</span>
            <span>Variant</span>
            <span>22€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets2.png" alt="Bouquet 2" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets3.png" alt="Bouquet 3" />
            <span>produit</span>
            <span>Variant</span>
            <span>45€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets4.png" alt="Bouquet 4" />
            <span>produit</span>
            <span>Variant</span>
            <span>32€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets1.png" alt="Bouquet 1" />
            <span>produit</span>
            <span>Variant</span>
            <span>22€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets2.png" alt="Bouquet 2" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets3.png" alt="Bouquet 3" />
            <span>produit</span>
            <span>Variant</span>
            <span>45€</span>
          </a>
          <a href="/Produit">
            <img src="../images/images_bouquets4.png" alt="Bouquet 4" />
            <span>produit</span>
            <span>Variant</span>
            <span>32€</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bouquetpage;
