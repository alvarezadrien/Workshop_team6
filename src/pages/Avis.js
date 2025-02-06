import React from "react";
import "../styles/Avis.css";

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Des compositions florales magnifiques et un service impeccable. Mon mariage était sublimé grâce à leurs créations !",
    image: "../images/Avatar_image2.svg",
    name: "Alice Dupont",
  },
  {
    stars: "⭐⭐⭐⭐",
    comment: "Un véritable coup de cœur ! Des bouquets originaux et modernes, parfaits pour offrir ou se faire plaisir.",
    image: "../images/Avatar_image1.svg",
    name: "Jean Martin",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Un service personnalisé et à l’écoute. Chaque bouquet raconte une histoire, et ça se voit !",
    image: "../images/Avatar_image3.svg",
    name: "Bernard Lambert",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Un service personnalisé et à l’écoute. Chaque bouquet raconte une histoire, et ça se voit !",
    image: "../images/Avatar_image4.svg",
    name: "Gérad Rennaud",
  },
];

const ReviewCard = ({ stars, comment, image, name }) => {
  return (
    <div className="review-card">
      <div className="review-stars">{stars}</div>
      <p className="review-comment">{comment}</p>
      <img src={image} alt={name} className="review-image" />
      <h3 className="review-name">{name}</h3>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="review-section">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewSection;
