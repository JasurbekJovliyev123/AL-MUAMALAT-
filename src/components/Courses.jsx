import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import React from "react";
const data = [
  {
    id: 1,
    category: "Design",
    title: "Various versions have evolved...",
    rating: 5,
    reviews: 20,
    price: 500,
    image: "/images/card1.png",
  },
  {
    id: 2,
    category: "Business",
    title: "Various versions have evolved...",
    rating: 4,
    reviews: 102,
    price: 500,
    image: "/images/card2.png",
  },
  {
    id: 3,
    category: "Business",
    title: "Various versions have evolved...",
    rating: 4,
    reviews: 102,
    price: 500,
    image: "/images/card3.png",
  },
  {
    id: 4,
    category: "Design",
    title: "Various versions have evolved...",
    rating: 3,
    reviews: 80,
    price: 450,
    image: "/images/card1.png",
  },
];

const CoucesSlider = () => {
  const [index, setIndex] = useState(0);
  const itemsPerView = 3;

  const next = () => {
    if (index < data.length - itemsPerView) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full container mb-[170px] mx-auto overflow-hidden px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="bg-teal-500 cursor-pointer text-white rounded-full p-2">
          <ChevronLeft />
        </button>
        <button onClick={next} className="bg-teal-500 cursor-pointer text-white rounded-full p-2">
          <ChevronRight />
        </button>
      </div>

      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}>
        {data.map((item) => (
          <div key={item.id} className="w-full max-w-sm shrink-0 p-2">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 relative">
              <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md absolute top-4 left-4">
                {item.category}
              </span>
              <img src={item.image} alt="card" className="h-40 w-full object-contain my-6" />
              <p className="text-gray-800 font-medium mb-2 truncate">{item.title}</p>
              <div className="flex items-center text-yellow-400 mb-2">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, i) => (
                  <span key={i}>☆</span>
                ))}
                <span className="text-gray-500 text-sm ml-2">({item.reviews})</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">${item.price}</p>
                <button className="bg-teal-100 text-teal-600 rounded-full p-2">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: data.length - itemsPerView + 1 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-teal-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoucesSlider;
