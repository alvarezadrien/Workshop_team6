import React from "react";
import "../../styles/Bouquetpage.css";

// Import widgets
import CarteProduit from "../Widgets/CarteProduit/CarteP";

const Bouquetpage = () => {
  return (
    <div className="bouquet-page-container">
      {/* Bannière principale */}
      <div className="bouquet-page-banner"></div>

      {/* Slogan sous la bannière */}
      <div className="bouquet-page-intro">
        <p className="bouquet-page-description">
          Des bouquets uniques, une expérience florale sur-mesure.
        </p>
        <div className="bouquet-page-button">
          <button>
            <a href="/Abonnement">Abonnement</a>
          </button>
        </div>
      </div>

      {/* Section des bouquets */}
      <section className="bouquet-page-section">
        <div className="bouquet-page-gallery">
          <CarteProduit />
        </div>
      </section>
    </div>
  );
};

export default Bouquetpage;
