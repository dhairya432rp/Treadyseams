
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClickCarousel() {
  const slides = [
    "./pics/slider-3(1).jpg",
    "./pics/slider-3(2).jpg",
    "./pics/slider-3(3).jpg",
    "./pics/slider-3(4).jpg",
    "./pics/slider-3(5).jpg",
    "./pics/slider-3(6).jpg",
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Function to go to next/prev slides
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // ✅ When clicked, only first slide triggers navigation
  const handleClick = () => {
    if (current === 0) {
      navigate("/newArrival"); // route where your second page lives
    }
  };

  return (
    <div
      className="relative my-10 w-[95%] mx-auto overflow-hidden border border-gray-300 rounded-md h-[450px] cursor-pointer"
      onClick={handleClick} // click listener on the carousel area
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering navigate
          prevSlide();
        }}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering navigate
          nextSlide();
        }}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}


//original one
// import React, { useState } from "react";

// export default function ClickCarousel() {
//   const slides = [
//     "./pics/slider-3(1).jpg",
//     "./pics/slider-3(2).jpg",
//     "./pics/slider-3(3).jpg",
//     "./pics/slider-3(4).jpg",
//     "./pics/slider-3(5).jpg",
//     "./pics/slider-3(6).jpg"

//   ];

//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     //slider no 1
//     <div className="relative my-10 w-[95%] mx-auto overflow-hidden  border-1 border-black h-[450px]">
//       {/* Slides */}
//       <div className="relative w-full h-full">
//         {slides.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={`Slide ${i + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//               i === current ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="black"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 19.5L8.25 12l7.5-7.5"
//           />
//         </svg>
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="black"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 4.5l7.5 7.5-7.5 7.5"
//           />
//         </svg>
//       </button>

//       {/* Dots Navigation */}
//       {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 w-8 rounded-full transition-all ${
//               i === current ? "bg-black" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// }