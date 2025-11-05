import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example product data
  const product = {
    id,
    title: "Sequin Mesh Faux-Wrap Dress",
    styleNumber: "CL0097506",
    price: "$149.95",
    oldPrice: "$169.95",
    rating: 4.8,
    reviewsCount: 267,
    images: [
      "/pics/slider-1(1).jpg",
      "/pics/slider1-(1.1).jpg",
      "/pics/slider1-(1.2).jpg",
      "/pics/slider1-(1.3).jpg",
    ],
    description:
      "A stunning sequin-embellished mesh faux-wrap dress featuring long blouson sleeves and flattering elastic waist. Elegant and versatile for formal events.",
    details: [
      "Surplice V-neck with inner snap",
      "Blouson sleeves, elastic cuffs",
      "Ankle length, back zip closure",
      "Side pockets",
      "60% polyester / 40% metallic knit mesh, sequined embroidery",
      "Dry clean only",
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "1X", "2X", "3X"],
    availableColors: ["Oxblood Red", "Navy", "Black", "Gold"],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [customLength, setCustomLength] = useState("Regular");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-indigo-600 hover:underline mb-4"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-[550px]  rounded-md mb-4"
          />
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} thumbnail ${i + 1}`}
                className={`w-24 h-24 object-cover border rounded-md cursor-pointer ${
                  mainImage === img ? "border-indigo-600" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm text-gray-500">Style Number: {product.styleNumber}</p>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐ {product.rating}</span>
            <span className="text-gray-500 text-sm">({product.reviewsCount} reviews)</span>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-indigo-600 text-2xl font-bold">{product.price}</span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through">{product.oldPrice}</span>
            )}
          </div>

          <p className="text-gray-700">{product.description}</p>

          {/* Color selection */}
          <div>
            <h3 className="font-semibold mb-1">Color:</h3>
            <div className="flex gap-3 flex-wrap">
              {product.availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedColor === color
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold mb-1">Select Size:</h3>
              <button
                onClick={() => setShowSizeChart(true)}
                className="text-sm text-indigo-600 hover:underline"
              >
                Size Chart
              </button>
            </div>
            <div className="flex gap-3 flex-wrap">
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedSize === size
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Custom length */}
          <div>
            <h3 className="font-semibold mb-1">Dress Length:</h3>
            <select
              value={customLength}
              onChange={(e) => setCustomLength(e.target.value)}
              className="border rounded px-3 py-2 w-1/2"
            >
              <option>Regular</option>
              <option>Petite</option>
              <option>Tall</option>
              <option>Custom Length</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <h3 className="font-semibold">Quantity:</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="w-16 border rounded text-center py-1"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition">
              Buy Now
            </button>
          </div>

          {/* Product details */}
          <div className="pt-6 border-t">
            <h4 className="font-semibold mb-2">Product Details</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          {/* Delivery & Returns */}
          <div className="pt-6 border-t">
            <h4 className="font-semibold mb-2">Delivery & Returns</h4>
            <p className="text-gray-700 text-sm">
              Ships in 12–14 business days. Free returns within 30 days of delivery.
              Custom-fit items are made-to-order and not returnable.
            </p>
          </div>
        </div>
      </div>

      {/* Size Chart Modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[600px] p-6 relative">
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Size Chart</h2>
            <table className="w-full border border-gray-200 text-sm text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Size</th>
                  <th className="border p-2">Bust (in)</th>
                  <th className="border p-2">Waist (in)</th>
                  <th className="border p-2">Hip (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">XS</td><td>32</td><td>25</td><td>35</td></tr>
                <tr><td className="border p-2">S</td><td>34</td><td>27</td><td>37</td></tr>
                <tr><td className="border p-2">M</td><td>36</td><td>29</td><td>39</td></tr>
                <tr><td className="border p-2">L</td><td>39</td><td>32</td><td>42</td></tr>
                <tr><td className="border p-2">XL</td><td>42</td><td>35</td><td>45</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
