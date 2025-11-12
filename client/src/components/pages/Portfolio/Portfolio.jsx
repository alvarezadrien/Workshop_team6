import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [categorieActive, setCategorieActive] = useState("tous");

  const projets = [
    {
      titre: "Mariage bohème",
      categorie: "mariage",
      image: "/images/images_portfolio/Mariage_boheme1.jpg",
    },
    {
      titre: "Événement d’entreprise",
      categorie: "evenement",
      image: "/images/images_portfolio/entreprise_fleurs1.webp",
    },
    {
      titre: "Création sur mesure",
      categorie: "autre",
      image: "/images/images_portfolio/fleurs_mesure1.webp",
    },
    {
      titre: "Mariage champêtre",
      categorie: "mariage",
      image: "/images/images_portfolio/Arche_fleurs_mariage1.jpg",
    },
    {
      titre: "Décor floral boutique",
      categorie: "evenement",
      image: "/images/images_portfolio/Decor_floral_boutique.jpg",
    },
    {
      titre: "Composition artistique",
      categorie: "autre",
      image: "/images/images_portfolio/Composition_artistique_fleurs.jpg",
    },
    {
      titre: "Vitrine de saison",
      categorie: "evenement",
      image: "/images/images_portfolio/Vitrine_saison_fleurs.jpg",
    },
    {
      titre: "Mariage élégant",
      categorie: "mariage",
      image: "/images/images_portfolio/Mariage_elegant1.jpg",
    },
  ];

  const projetsFiltres =
    categorieActive === "tous"
      ? projets
      : projets.filter((p) => p.categorie === categorieActive);

  return (
    <div className="portfolio-container">
      {/* HERO */}
      <section className="portfolio-hero">
        <div className="overlay">
          <h1 data-text="Notre Univers Visuel">Notre Univers Visuel</h1>
          <p>
            Découvrez notre passion à travers des créations uniques, élégantes
            et intemporelles.
          </p>
        </div>
      </section>

      {/* FILTRES */}
      <section className="portfolio-filtres">
        <button
          className={categorieActive === "tous" ? "active" : ""}
          onClick={() => setCategorieActive("tous")}
        >
          Tous
        </button>
        <button
          className={categorieActive === "mariage" ? "active" : ""}
          onClick={() => setCategorieActive("mariage")}
        >
          Mariages
        </button>
        <button
          className={categorieActive === "evenement" ? "active" : ""}
          onClick={() => setCategorieActive("evenement")}
        >
          Événements
        </button>
        <button
          className={categorieActive === "autre" ? "active" : ""}
          onClick={() => setCategorieActive("autre")}
        >
          Autres créations
        </button>
      </section>

      {/* GALERIE */}
      <section className="portfolio-gallery">
        <div className="gallery-grid">
          {projetsFiltres.map((projet, index) => (
            <div className="gallery-item" key={index}>
              <img src={projet.image} alt={projet.titre} />
              <div className="gallery-overlay">
                <h3>{projet.titre}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="portfolio-stats">
        <div className="stat">
          <h3>10+</h3>
          <p>Années d’expérience</p>
        </div>
        <div className="stat">
          <h3>250+</h3>
          <p>Projets réalisés</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Clients satisfaits</p>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="portfolio-about">
        <div className="about-content">
          <h2>Notre philosophie</h2>
          <p>
            L’art floral est plus qu’un métier : c’est une émotion que nous
            partageons à travers chaque pétale. Nos compositions allient
            créativité, élégance et respect de la nature.
          </p>
          <p>
            Chaque projet est une rencontre : une histoire à raconter, une
            ambiance à créer, une émotion à sublimer.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="portfolio-contact">
        <h2>Envie de créer ensemble ?</h2>
        <p>
          Discutons de votre projet floral dès aujourd’hui et donnons vie à vos
          idées.
        </p>
        <button
          className="portfolio-btn"
          onClick={() => (window.location.href = "/contact")}
        >
          Contactez-nous
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
