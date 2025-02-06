import React, { useState } from "react";
import "../styles/Produit.css";

const Product = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="product-container">
      <img
        src="../images/image_produit.png"
        alt="Produit"
        className="product-image"
      />

      <div className="product-info">
        <h2 className="product-title">Bouquet</h2>
        <span className="product-price">29.99€</span>

        <div className="rating">⭐⭐⭐⭐⭐ (4.8)</div>

        <p className="product-description">
          Ceci est une courte description du produit. Il est de haute qualité et
          parfait pour vous.
        </p>

        <div className="size-options">
          <label>
            <input
              type="radio"
              name="size"
              value="S"
              checked={size === "S"}
              onChange={handleSizeChange}
            />{" "}
            S
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="M"
              checked={size === "M"}
              onChange={handleSizeChange}
            />{" "}
            M
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="L"
              checked={size === "L"}
              onChange={handleSizeChange}
            />{" "}
            L
          </label>
        </div>

        <div className="quantity-selector">
          <label htmlFor="quantity">Quantité :</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <div className="button-container">
          <button className="add-to-cart-button">Ajouter au panier</button>
          <button className="add-to-cart-button">Acheter</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Product;
