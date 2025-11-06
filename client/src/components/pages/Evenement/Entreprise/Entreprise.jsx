import React, { useState } from "react";
import "./Entreprise.css";

const Hero = () => (
  <div className="hero">
    <div>
      <h2>Des fleurs pour sublimer votre entreprise</h2>

      <p>
        {" "}
        Une touche florale au quotidien ou commandez pour un événement
        exceptionnel
      </p>

      <div className="cta-buttons">
        <a href="/abonnement" className="cta-buttons">
          Abonnements
        </a>
        <a href="/Formulaire devis" className="cta-buttons">
          Obtenir un devis
        </a>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Services = () => (
  <div className="service-container">
    <ServiceCard
      image="../images/Rectangle 3351.png"
      title="Evenements professionnels"
      description="Décoration florale pour conférences, séminaires, lancements de produits et réceptions d’entreprise."
    />
    <ServiceCard
      image="../images/Rectangle 3348.png"
      title="Décoration des fêtes et saisons"
      description="Conception de décorations florales thématiques pour Noël, Pâques, la Saint-Valentin ou toute autre occasion spéciale."
    />
    <ServiceCard
      image="../images/Rectangle 3352.png"
      title="Cadeaux d’entreprise & fidélisation"
      description="Création de bouquets personnalisés pour clients, partenaires et employés (anniversaires, promotions, remerciements)."
    />
    <ServiceCard
      image="../images/Rectangle 3353.png"
      title="Ateliers floraux pour employés"
      description="Sessions de team building autour de la création florale (composition de bouquets, terrariums, ikebana)."
    />
  </div>
);

const ImageBox = ({ image, label }) => (
  <div className="image-box">
    <img src={image} alt={label} />
    <span>{label}</span>
  </div>
);

const ImageServices = () => (
  <div className="images_services">
    <ImageBox image="../images/frame1.png" label="Boutique" />
    <ImageBox image="../images/frame2.png" label="Mariage" />
    <ImageBox image="../images/frame3.png" label="Enterrement" />
    <ImageBox image="../images/frame4.png" label="Entreprise" />
  </div>
);

const Subscription = () => (
  <div className="abo">
    <div className="box">
      <img src="../images/Rectangle_entreprise.png" alt="abo1" />
      <div className="text">
        <h2>Abonnement entreprise</h2>
        <p>Un abonnement floral pour un cadre de travail inspirant</p>
      </div>
    </div>
    <div className="call-to-action">
      <button>
        <a href="/abonnement">Choisir un abonnement</a>
      </button>
    </div>
  </div>
);

const FAQItem = ({ question }) => (
  <div className="faq-item">
    <span className="icon"> ? </span>
    <span className="questions">{question}</span>
  </div>
);

const FAQSection = () => (
  <div className="faq-section">
    <h2>Questions fréquentes (FAQ)</h2>
    <div className="faq-items">
      <FAQItem question="Comment fonctionne l'abonnement ?" />
      <FAQItem question="Quels types d'événements couvrez-vous ?" />
      <FAQItem question="Quel est le délai de livraison ?" />
    </div>
  </div>
);

const Entreprise = () => (
  <div>
    <Hero />
    <h1 className="titre1">Listes des services</h1>
    <Services />
    <ImageServices />
    <Subscription />
    <div className="image">
      <img src="../images/image_entreprise.png" alt="florale" />
    </div>
    <FAQSection />
  </div>
);

export default Entreprise;
