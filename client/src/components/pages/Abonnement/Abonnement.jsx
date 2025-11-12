import React from "react";
import { useNavigate } from "react-router-dom";
import "./Abonnement.css";

const Abonnement = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const offres = [
    {
      nom: "Abonnement Découverte",
      description:
        "Chaque mois, recevez un bouquet de saison soigneusement composé avec des fleurs locales. L’abonnement idéal pour ceux qui veulent apporter une touche florale à leur quotidien.",
      prix: "29€/mois",
      details: "Livraison mensuelle incluse.",
    },
    {
      nom: "Abonnement Élégance",
      description:
        "Deux fois par mois, nos artisans fleuristes vous livrent un bouquet élégant, équilibrant couleur, parfum et émotion. Un choix parfait pour sublimer vos espaces.",
      prix: "49€/mois",
      details: "Livraison bimensuelle incluse.",
    },
    {
      nom: "Abonnement Prestige",
      description:
        "Chaque semaine, un bouquet d’exception aux fleurs premium, soigneusement sélectionnées et préparées à la main dans notre atelier. Luxe et nature réunis.",
      prix: "79€/mois",
      details: "Livraison hebdomadaire incluse.",
    },
  ];

  return (
    <div className="abonnement-container">
      {/* Bannière */}
      <section className="abonnement-banner">
        <img
          src="/images/BannièrePage/Banniere-renverse.jpg"
          alt="Bouquet de fleurs"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">Nos Abonnements Floraux</h1>
          <p className="banner-subtitle">
            L’art floral livré directement à votre porte, au rythme des saisons.
          </p>
        </div>
      </section>

      {/* Offres */}
      <section className="offres-section">
        <h2 className="section-title">Choisissez votre formule</h2>
        <div className="offres-grid">
          {offres.map((offre, index) => (
            <div className="offre-card" key={index}>
              <h3 className="offre-nom">{offre.nom}</h3>
              <p className="offre-description">{offre.description}</p>
              <p className="offre-details">{offre.details}</p>
              <p className="offre-prix">{offre.prix}</p>
              <button className="offre-bouton">Souscrire</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section artisanale */}
      <section className="artisanat-section">
        <div className="artisanat-content">
          <h2>Un savoir-faire artisanal</h2>
          <p>
            Nos bouquets sont imaginés, assemblés et emballés à la main par des
            artisans passionnés. Chaque création reflète notre engagement envers
            la qualité, la durabilité et la beauté naturelle des fleurs.
          </p>
          <ul>
            <li>🌿 Fleurs locales et éco-responsables</li>
            <li>💐 Compositions uniques chaque semaine</li>
            <li>🚚 Livraison souple et sans contrainte</li>
            <li>🎁 Option cadeau avec carte personnalisée</li>
          </ul>
        </div>
      </section>

      {/* Footer info */}
      <section className="footer-info">
        <p>
          💌 Envie d’en savoir plus ? Contactez-nous pour un abonnement sur
          mesure adapté à vos envies.
        </p>
        <button className="contact-bouton" onClick={handleContactClick}>
          Nous contacter
        </button>
      </section>
    </div>
  );
};

export default Abonnement;
