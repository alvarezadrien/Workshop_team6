import React, { useEffect, useState } from "react";
import "./CarteP.css";

const CarteProduit = ({ category }) => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/products`
        );
        const data = await response.json();

        // Filtrer selon la catégorie (bouquet ou vase)
        const filtered =
          category === "bouquet"
            ? data.filter((item) => item.category === "bouquet")
            : category === "vase"
            ? data.filter((item) => item.category === "vase")
            : data;

        setProduits(filtered);
      } catch (error) {
        console.error("Erreur lors du chargement des produits :", error);
      }
    };

    fetchProduits();
  }, [category]);

  // --- Fonction pour générer le lien complet vers l'image ---
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/placeholder.png"; // image par défaut
    // Si c’est un lien externe (http ou https), on le garde tel quel
    if (imagePath.startsWith("http")) return imagePath;
    // Sinon, on ajoute l’URL du backend
    return `${process.env.REACT_APP_API_URL}${imagePath}`;
  };

  return (
    <div className="carte-produit-container">
      {produits.map((produit) => (
        <div key={produit._id} className="carte-produit">
          <a href={`/Produit/${produit._id}`}>
            <img
              src={getImageUrl(produit.image)}
              alt={produit.name}
              className="carte-image"
              loading="lazy"
            />
            <div className="carte-info">
              <span className="carte-nom">{produit.name}</span>
              <span className="carte-description">
                {produit.description.length > 50
                  ? produit.description.slice(0, 50) + "..."
                  : produit.description}
              </span>
              <span className="carte-prix">{produit.price}€</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CarteProduit;
