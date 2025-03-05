import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={prevImage}>
        {"<"}
      </button>
      <img src={images[currentIndex]} alt={`Carousel ${currentIndex + 1}`} />
      <button className="carousel-button next-button" onClick={nextImage}>
        {">"}
      </button>
      {/* <div className="">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {index}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
