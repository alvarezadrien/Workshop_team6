import React from "react";
import "./CarteP.css";

const CarteProduit = () => {
  const produits = [
    {
      id: 1,
      image: "../images/images_bouquets1.png",
      nom: "Bouquet Rosée Matinale",
      variant: "Fleurs fraîches mixtes",
      prix: "22€",
    },
    {
      id: 2,
      image: "../images/images_bouquets2.png",
      nom: "Bouquet Passion Rouge",
      variant: "Roses rouges & feuillages",
      prix: "55€",
    },
    {
      id: 3,
      image: "../images/images_bouquets3.png",
      nom: "Bouquet Printemps",
      variant: "Tulipes et pivoines",
      prix: "45€",
    },
    {
      id: 4,
      image: "../images/images_bouquets4.png",
      nom: "Bouquet Élégance Blanche",
      variant: "Orchidées et lys",
      prix: "32€",
    },
  ];

  return (
    <div className="carte-produit-container">
      {produits.map((produit) => (
        <div key={produit.id} className="carte-produit">
          <a href="/Produit">
            <img src={produit.image} alt={produit.nom} />
            <div className="carte-info">
              <span className="carte-nom">{produit.nom}</span>
              <span className="carte-variant">{produit.variant}</span>
              <span className="carte-prix">{produit.prix}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CarteProduit;
