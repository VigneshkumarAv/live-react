import React, { useState } from "react";
import "../App.css";
const StarRating = (props) => {
  const { totalStars = 5 } = props;
  const [rating, setRating] = useState(null);
  const handleRating = (index, halfStar) => {
    const newRating = halfStar ? index + 0.5 : index + 1;
    setRating(newRating);
  };
  const renderStar = (index) => {
    const isFullStar = index < Math.floor(rating);
    const isHalfStar = index === Math.floor(rating) && rating % 1 !== 0;
    if (isFullStar) {
      return <span className="star filled">★</span>;
    }
    if (isHalfStar) {
      return <span className="star half-filled">★</span>;
    } else {
      return <span className="star">★</span>;
    }
  };
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className="star-container"
          onClick={(e) => {
            const halfStar = e.nativeEvent.offsetX < e.target.offsetWidth / 2;
            handleRating(index, halfStar);
          }}
        >
          {renderStar(index)}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
