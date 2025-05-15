import { useState, useEffect } from "react";
import React from "react";
import {users} from '../constans/index'

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full container mx-auto overflow-hidden rounded-2xl">
      {/* Rasm
      <img
        src={images[currentIndex]}
        className="w-full h-[300px] object-cover transition-all duration-700"
        alt={`Slide ${currentIndex}`}
      /> */}
       

     

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-red-200 w-6 h-3" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
