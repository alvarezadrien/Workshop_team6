import React, { useEffect, useState } from "react";
import "./CarteP.css";

const CarteProduit = ({ category }) => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/products`;
        console.log("🔗 Requête envoyée vers :", apiUrl);

        const response = await fetch(apiUrl);

        // Vérifie le type de réponse avant d'essayer de lire le JSON
        const contentType = response.headers.get("content-type");
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`);
        }
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("❌ Réponse non JSON :", text.slice(0, 200));
          throw new Error("La réponse du serveur n’est pas au format JSON.");
        }

        const data = await response.json();
        console.log("✅ Données reçues :", data);

        // Filtrer selon la catégorie (bouquet ou vase)
        const filtered =
          category === "bouquet"
            ? data.filter((item) => item.category === "bouquet")
            : category === "vase"
            ? data.filter((item) => item.category === "vase")
            : data;

        setProduits(filtered);
      } catch (error) {
        console.error("⚠️ Erreur lors du chargement des produits :", error);
      }
    };

    fetchProduits();
  }, [category]);

  // --- Fonction pour générer le lien complet vers l'image ---
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/placeholder.png"; // image par défaut
    if (imagePath.startsWith("http")) return imagePath; // lien externe
    return `${process.env.REACT_APP_API_URL}${imagePath}`;
  };

  return (
    <div className="carte-produit-container">
      {produits.length === 0 ? (
        <p className="aucun-produit">Aucun produit trouvé.</p>
      ) : (
        produits.map((produit) => (
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
                  {produit.description?.length > 50
                    ? produit.description.slice(0, 50) + "..."
                    : produit.description}
                </span>
                <span className="carte-prix">{produit.price}€</span>
              </div>
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default CarteProduit;
