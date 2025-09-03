import React, { useEffect, useState } from "react";

const HomeSlider = () => {
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkPPX2QQbyuaYFAmsUNJCU7-LjMJv553nvg&s",
    "https://www.shutterstock.com/image-photo/group-multinational-business-people-digital-600nw-2430266899.jpg",
    "https://cdn.dribbble.com/userupload/23055974/file/original-d06dd4e6509919d8c1198791cfc3fa7e.png?resize=800x600&vertical=center",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="w-full max-w-4xl mx-auto my-10">
      {/* Slider container */}
      <div className="relative w-full h-80 rounded-xl shadow-lg overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide}
              className="w-full h-80 object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs ${
              index === current ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;