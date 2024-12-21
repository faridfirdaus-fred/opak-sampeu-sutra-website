"use client";
import React, { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative lg:h-full py-6 md:px-6 lg:px-12 w-full">
      {/* Tombol Prev dan Next */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center lg:px-16 px-6 md:px-10 z-10">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white bg-opacity-75 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-100"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white bg-opacity-75 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-100"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>

      {/* Gambar Slider */}
      <div className="relative w-full h-64 md:h-auto">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="object-cover w-full h-full md:object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
