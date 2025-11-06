import React from "react";
import "../../styles/Vasse.css";

const Vasse = () => {
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
        <h2>Nos vases</h2>
      </div>
      <div className="para_vasses">Des vases uniques</div>
      {/* Affichage des bouquets */}
      <div className="vasses">
        <div className="images_vasses_page">
          <a href="/Produit">
            <img src="../images/vasse1.png" alt="Bouquet 1" />
            <span>produit</span>
            <span>Variant</span>
            <span>12€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse2.png" alt="Bouquet 2" />
            <span>produit</span>
            <span>Variant</span>
            <span>25€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse3.png" alt="Bouquet 3" />
            <span>produit</span>
            <span>Variant</span>
            <span>35€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse4.png" alt="Bouquet 4" />
            <span>produit</span>
            <span>Variant</span>
            <span>10€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse5.png" alt="Bouquet 1" />
            <span>produit</span>
            <span>Variant</span>
            <span>22€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse6.png" alt="Bouquet 2" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse7.png" alt="Bouquet 3" />
            <span>produit</span>
            <span>Variant</span>
            <span>45€</span>
          </a>
          <a href="/Produit">
            <img src="../images/vasse8.png" alt="Bouquet 4" />
            <span>produit</span>
            <span>Variant</span>
            <span>32€</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vasse;
