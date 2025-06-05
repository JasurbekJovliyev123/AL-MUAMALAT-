import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius voluptas sunt minus distinctio repellat voluptates labore aperiam corrupti aliquid ducimus dolorem ea accusantium provident adipisci impedit explicabo incidunt aspernatur, voluptatum id reiciendis sint consequuntur? Ducimus reiciendis illo expedita minus.",
    name: "Finlay Kirk",
    title: "Web designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius voluptas sunt minus distinctio repellat voluptates labore aperiam corrupti aliquid ducimus dolorem ea accusantium provident adipisci impedit explicabo incidunt aspernatur, voluptatum id reiciendis sint consequuntur? Ducimus reiciendis illo expedita minus.",
    name: "Finlay Kirk",
    title: "Web designer",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius voluptas sunt minus distinctio repellat voluptates labore aperiam corrupti aliquid ducimus dolorem ea accusantium provident adipisci impedit explicabo incidunt aspernatur, voluptatum id reiciendis sint consequuntur? Ducimus reiciendis illo expedita minus.",
    name: "Finlay Kirk",
    title: "Web designer",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius voluptas sunt minus distinctio repellat voluptates labore aperiam corrupti aliquid ducimus dolorem ea accusantium provident adipisci impedit explicabo incidunt aspernatur, voluptatum id reiciendis sint consequuntur? Ducimus reiciendis illo expedita minus.",
    name: "Finlay Kirk",
    title: "Web designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius voluptas sunt minus distinctio repellat voluptates labore aperiam corrupti aliquid ducimus dolorem ea accusantium provident adipisci impedit explicabo incidunt aspernatur, voluptatum id reiciendis sint consequuntur? Ducimus reiciendis illo expedita minus.",
    name: "Finlay Kirk",
    title: "Web designer",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius voluptas sunt minus distinctio repellat voluptates labore aperiam corrupti aliquid ducimus dolorem ea accusantium provident adipisci impedit explicabo incidunt aspernatur, voluptatum id reiciendis sint consequuntur? Ducimus reiciendis illo expedita minus.",
    name: "Finlay Kirk",
    title: "Web designer",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 340;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative container w-full px-4 py-10 bg-white">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ChevronLeft />
        </button>
        
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ChevronRight />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="lg:min-w-[372px] min-w-[300px] bg-[#F6F8F9] p-8 rounded-md shadow-lg"
          >
            <p className="text-[#686868] text-[17px] mb-4">{item.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold text-[18px]">{item.name}</h4>
                <p className="text-[12px] text-[#686868]">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
