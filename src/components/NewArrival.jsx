import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function NewArrival() {
      const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      title: "Floral Print Wrap Dress",
      price: "$89.99",
      oldPrice: "$109.99",
      img: "./pics/slider-1(1).jpg",
    },
    {
      id: 2,
      title: "Casual Linen Summer Dress",
      price: "$79.99",
      oldPrice: null,
      img: "./pics/slider1-2.jpg",
    },
    {
      id: 3,
      title: "Boho Maxi Dress",
      price: "$99.99",
      oldPrice: "$129.99",
      img: "./pics/slider1-3.jpg",
    },
    {
      id: 4,
      title: "Cotton Fit & Flare",
      price: "$84.99",
      oldPrice: null,
      img: "./pics/slider1-4.jpg",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        ✨ New Arrivals ✨
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore our latest collection — crafted with style and comfort for the season.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3 border rounded-md p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Filter By</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700 text-sm">Color</h3>
            <div className="flex flex-wrap gap-2">
              {["red", "blue", "green", "black", "white"].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border border-gray-400 bg-${color}-500`}
                ></button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700 text-sm">Price Range</h3>
            <input type="range" min="50" max="200" className="w-full accent-indigo-600" />
          </div>

          <div>
            <h3 className="font-medium mb-2 text-gray-700 text-sm">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-2 py-1 border rounded text-sm hover:bg-indigo-600 hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <section className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                    <div
            key={product.id}
           onClick={() => navigate(`/product/${product.id}`)}

            className="border rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer"
          >

                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-gray-800 font-semibold text-sm mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold text-lg">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full bg-indigo-600 text-white text-sm py-2 rounded hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
