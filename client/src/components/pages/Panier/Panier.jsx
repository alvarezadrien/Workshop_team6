import React, { useState } from "react";
import "./Panier.css";

const Panier = () => {
  // Exemple d’articles fictifs (à remplacer plus tard par tes vraies données)
  const [articles, setArticles] = useState([
    {
      id: 1,
      nom: "Bouquet Élégance",
      prix: 39.99,
      quantite: 1,
      image: "https://picsum.photos/200/200?random=1",
    },
    {
      id: 2,
      nom: "Composition Florale Romantique",
      prix: 54.5,
      quantite: 2,
      image: "https://picsum.photos/200/200?random=2",
    },
  ]);

  const incrementerQuantite = (id) => {
    setArticles(
      articles.map((a) =>
        a.id === id ? { ...a, quantite: a.quantite + 1 } : a
      )
    );
  };

  const diminuerQuantite = (id) => {
    setArticles(
      articles
        .map((a) =>
          a.id === id && a.quantite > 1 ? { ...a, quantite: a.quantite - 1 } : a
        )
        .filter((a) => a.quantite > 0)
    );
  };

  const supprimerArticle = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  const total = articles
    .reduce((acc, a) => acc + a.prix * a.quantite, 0)
    .toFixed(2);

  return (
    <div className="panier-container">
      <h1>Mon Panier</h1>

      {articles.length === 0 ? (
        <div className="panier-vide">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Panier vide"
          />
          <h2>Votre panier est vide</h2>
          <p>
            Parcourez notre boutique pour trouver des créations qui vous
            plaisent.
          </p>
          <button onClick={() => (window.location.href = "/boutique")}>
            Découvrir la boutique
          </button>
        </div>
      ) : (
        <div className="panier-content">
          <div className="panier-articles">
            {articles.map((article) => (
              <div className="panier-article" key={article.id}>
                <img src={article.image} alt={article.nom} />
                <div className="article-info">
                  <h3>{article.nom}</h3>
                  <p>{article.prix.toFixed(2)} €</p>
                  <div className="quantite-controls">
                    <button onClick={() => diminuerQuantite(article.id)}>
                      -
                    </button>
                    <span>{article.quantite}</span>
                    <button onClick={() => incrementerQuantite(article.id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="article-actions">
                  <p>
                    Total : {(article.prix * article.quantite).toFixed(2)} €
                  </p>
                  <button
                    className="btn-supprimer"
                    onClick={() => supprimerArticle(article.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="panier-resume">
            <h2>Résumé de la commande</h2>
            <p>
              <strong>Total :</strong> {total} €
            </p>
            <button
              className="btn-paiement"
              onClick={() => alert("Redirection vers le paiement...")}
            >
              Procéder au paiement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
