import React from "react";
import "../styles/Avis.css";

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.Duis cursus, mi quis viverra ornare.",
    image: "../images/Avatar_image2.svg",
    name: "Alice Dupont",
  },
  {
    stars: "⭐⭐⭐⭐",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "../images/Avatar_image1.svg",
    name: "Jean Martin",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "../images/Avatar_image3.svg",
    name: "Bernard Lambert",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "../images/Avatar_image3.svg",
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
