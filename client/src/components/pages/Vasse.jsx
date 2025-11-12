import React from "react";
import "../../styles/Vasse.css";

// Import widgets
import CarteProduit from "../Widgets/CarteProduit/CarteP";

const Vases = () => {
  return (
    <div className="vases-page-container">
      {/* Bannière principale */}
      <div className="vases-page-banner"></div>

      {/* Slogan sous la bannière */}
      <div className="vases-page-intro">
        <p className="vases-page-description">
          Des vases élégants, pensés pour sublimer vos compositions florales.
        </p>
        <div className="vases-page-button">
          <button>
            <a href="/Abonnement">Abonnement</a>
          </button>
        </div>
      </div>

      {/* Section des vases */}
      <section className="vases-page-section">
        <div className="vases-page-gallery">
          <CarteProduit category="vase" />
        </div>
      </section>
    </div>
  );
};

export default Vases;
