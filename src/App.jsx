// import { Carousel } from "@material-tailwind/react";
 
// export default function App() {
//   return (
//     <Carousel
//       className="h-96  rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// }

  // import React, { useState, useEffect } from "react";

  // export default function Header() {
  //   const [open, setOpen] = useState(false);

  //   // prevent body scroll when drawer is open
  //   useEffect(() => {
  //     document.body.style.overflow = open ? "hidden" : "";
  //     return () => (document.body.style.overflow = "");
  //   }, [open]);

  //   return (
  //     <div className="relative">
  //     <header className="border-b border-gray-200 bg-white">
  //       {/* top row */}
  //       <div className="px-4 md:px-8 py-3 flex items-center gap-4">
  //         {/* logo */}
  //         <a href="#" className="shrink-0">
  //           <img
  //             src="./logo2.jpg"
  //             alt="logo"
  //             className="w-[150px] border-2  h-20 hidden sm:block"
  //           />
  //           <img
  //             src="./logo.jpg"
  //             alt="logo"
  //             className="w-9 h-9 sm:hidden"
  //           />
  //         </a>

  //         {/* (desktop) nav center */}
  //         <nav className="hidden lg:flex items-center gap-10 mx-auto">
  //           <a className="text-indigo-600 font-medium" href="#">Home</a>
  //           <a className="hover:text-indigo-600" href="#">Pages</a>
  //           <a className="hover:text-indigo-600" href="#">Blog</a>
  //           <a className="hover:text-indigo-600" href="#">Team</a>
  //           <a className="hover:text-indigo-600" href="#">About</a>
  //           <a className="hover:text-indigo-600" href="#">Contact</a>
  //           <a className="hover:text-indigo-600" href="#">Source</a>
  //         </nav>

  //         {/* right icons + hamburger */}
  //         <div className="ml-auto flex items-center gap-3">
  //           {/* bell */}
  //           <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Notifications">
  //             <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
  //               <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5-6.71V3a2 2 0 1 0-4 0v1.29A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z"/>
  //             </svg>
  //           </button>

  //           {/* hamburger (mobile) */}
  //           <button
  //             onClick={() => setOpen(true)}
  //             className="lg:hidden p-2 rounded hover:bg-gray-100"
  //             aria-label="Open menu"
  //           >
  //             <svg className="w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
  //               <path
  //                 fillRule="evenodd"
  //                 d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
  //                 clipRule="evenodd"
  //               />
  //             </svg>
  //           </button>
  //         </div>
  //       </div>

  //       {/* search bar (visible always under the top row) */}
  //       <div className="px-4 md:px-8 pb-3">
  //         <div className="bg-gray-100 border border-transparent focus-within:border-slate-900 focus-within:bg-transparent flex items-center px-4 rounded-full h-10 lg:w-1/2 mx-auto transition-all">
  //           <svg viewBox="0 0 192.904 192.904" className="w-4 h-4 fill-gray-500 mr-3">
  //             <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"/>
  //           </svg>
  //           <input
  //             type="text"
  //             placeholder="Search…"
  //             className="w-full outline-none bg-transparent text-[15px]"
  //           />
  //         </div>
  //       </div>

  //       {/* MOBILE DRAWER */}
  //       {/* overlay */}
  //       <div
  //         onClick={() => setOpen(false)}
  //         className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-200 z-50 ${
  //           open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  //         }`}
  //       />

  //       {/* floating circular close button */}
  //       <button
  //         onClick={() => setOpen(false)}
  //         aria-label="Close menu"
  //         className={`fixed top-3 right-3 z-[60] h-9 w-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center transition-transform ${
  //           open ? "scale-100" : "scale-0"
  //         }`}
  //       >
  //         <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
  //           <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"/>
  //         </svg>
  //       </button>

  //       {/* panel */}
  //       <aside
  //         className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-2xl border-r border-gray-100 z-[60]
  //         rounded-r-2xl transition-transform duration-200
  //         ${open ? "translate-x-0" : "-translate-x-full"}`}
  //       >
  //         <div className="p-5">
  //           <img
  //             src="https://readymadeui.com/readymadeui.svg"
  //             alt="logo"
  //             className="w-40 mb-5"
  //           />

  //           <nav className="pr-6">
  //             {[
  //               { label: "Home", active: true },
  //               { label: "Pages" },
  //               { label: "Blog" },
  //               { label: "Team" },
  //               { label: "About" },
  //               { label: "Contact" },
  //               { label: "Source" },
  //             ].map((item, idx) => (
  //               <div key={item.label} className="py-3">
  //                 <a
  //                   href="#"
  //                   className={`block text-[15px] ${
  //                     item.active ? "text-indigo-600 font-semibold" : "text-slate-700 hover:text-indigo-600"
  //                   }`}
  //                 >
  //                   {item.label}
  //                 </a>
  //                 {/* thin underline with fixed width like screenshot */}
  //                 {idx !== 6 && (
  //                   <span className="mt-3 block h-px w-56 bg-gray-200" />
  //                 )}
  //               </div>
  //             ))}
  //           </nav>
  //         </div>
  //       </aside>
  //     </header>
  //     </div>
  //   );
  // }

import React from 'react'
import Home from './Home'
const App = () => {
  return (
    <>
    <Home/>
    </>
 
  )
}

export default App