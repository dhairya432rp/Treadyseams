// import { Carousel, IconButton } from "@material-tailwind/react";

// export default function Firstpageslide() {
//   return (
//     <div className="">
//       <Carousel
//         className="h-96 border-[1.5px] border-black mx-auto w-[90%] rounded-xl"
//         prevArrow={({ handlePrev }) => (
//           <IconButton
//             variant="text"
//             color="black" // make it black
//             size="lg"
//             onClick={handlePrev}
//             className="!absolute top-2/4 left-4 -translate-y-2/4"
//           >
//             {/* Left Arrow */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="black"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 19.5L8.25 12l7.5-7.5"
//               />
//             </svg>
//           </IconButton>
//         )}
//         nextArrow={({ handleNext }) => (
//           <IconButton
//             variant="text"
//             color="black"
//             size="lg"
//             onClick={handleNext}
//             className="!absolute top-2/4 right-4 -translate-y-2/4"
//           >
//             {/* Right Arrow */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="black"
//               className="h-6 w-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </svg>
//           </IconButton>
//         )}
//         navigation={({ setActiveIndex, activeIndex, length }) => (
//           <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//             {new Array(length).fill("").map((_, i) => (
//               <span
//                 key={i}
//                 className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                   activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
//                 }`}
//                 onClick={() => setActiveIndex(i)}
//               />
//             ))}
//           </div>
//         )}
//       >
//         <img
//           src="./pics/slider1-1.jpg"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <img
//           src="./pics/slider1-1.jpg"
//           alt="image 2"
//           className="h-full w-full object-cover"
//         />
//         <img
//           src="./pics/slider1-1.jpg"
//           alt="image 3"
//           className="h-full w-full object-cover"
//         />
//       </Carousel>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function ClickCarousel() {
  const slides = [
    "./pics/slider1-1.jpg",
    "./pics/img2.jpg",
    "./pics/img3.jpg",
    "./pics/img4.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    //slider no 1
    <div className="relative  w-[95%] mx-auto overflow-hidden  border-1 border-black h-[450px]">
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
        onClick={prevSlide}
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
        onClick={nextSlide}
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

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-8 rounded-full transition-all ${
              i === current ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
