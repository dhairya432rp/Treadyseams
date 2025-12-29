import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedLength, setSelectedLength] = useState(null);

const lengthOptions = [
  {
    label: "Short",
    thumb: "/pics/length/short-thumb.jpg",
    preview: "/pics/length/short-preview.jpg",
  },
  {
    label: "Floor",
    thumb: "/pics/length/floor-thumb.jpg",
    preview: "/pics/length/floor-preview.jpg",
  },
  {
    label: '2" Above Ankle',
    thumb: "/pics/length/2inch-thumb.jpg",
    preview: "/pics/length/2inch-preview.jpg",
  },
  {
    label: "Above knee",
    thumb: "/pics/length/above-knee-thumb.jpg",
    preview: "/pics/length/above-knee-preview.jpg",
  },
  {
    label: "Knee",
    thumb: "/pics/length/knee-thumb.jpg",
    preview: "/pics/length/knee-preview.jpg",
  },
  {
    label: "Below knee",
    thumb: "/pics/length/below-knee-thumb.jpg",
    preview: "/pics/length/below-knee-preview.jpg",
  },
  {
    label: "Mid-calf",
    thumb: "/pics/length/mid-calf-thumb.jpg",
    preview: "/pics/length/mid-calf-preview.jpg",
  },
  {
    label: "Ankle",
    thumb: "/pics/length/ankle-thumb.jpg",
    preview: "/pics/length/ankle-preview.jpg",
  },
];

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
  const [sizeType, setSizeType] = useState("standard"); // standard | custom
  const [activeCustomizer, setActiveCustomizer] = useState(null);
// "neckline" | "sleeve" | "length" | null



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-indigo-600 hover:underline mb-4"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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

        {/* //custom button */}
{/* Customize Style Panel */}
<div className="border p-4 space-y-6">
  <button className="w-full border px-4 py-2 font-semibold">
    CUSTOMIZE STYLE
  </button>

  {/* CHANGE NECKLINE */}
  <div
    className="cursor-pointer"
    onClick={() => setActiveCustomizer("neckline")}
  >
    <h4 className="font-semibold underline">CHANGE NECKLINE</h4>
    <div className="flex items-center gap-3 mt-2">
      <div className="w-12 h-16 bg-gray-200 text-xs flex items-center justify-center">
        As Shown
      </div>
      <span className="text-sm">As Shown</span>
    </div>
  </div>

  {/* CHANGE SLEEVE */}
  <div
    className="cursor-pointer"
    onClick={() => setActiveCustomizer("sleeve")}
  >
    <h4 className="font-semibold underline">CHANGE SLEEVE TYPE</h4>
    <div className="flex items-center gap-3 mt-2">
      <div className="w-12 h-16 bg-gray-200 text-xs flex items-center justify-center">
        As Shown
      </div>
      <span className="text-sm">As Shown</span>
    </div>
  </div>

  {/* CHANGE LENGTH */}
  <div
    className="cursor-pointer"
    onClick={() => setActiveCustomizer("length")}
  >
    <h4 className="font-semibold underline">CHANGE LENGTH</h4>
    <div className="flex items-center gap-3 mt-2">
      <div className="w-12 h-16 bg-gray-200 text-xs flex items-center justify-center">
        As Shown
      </div>
      <span className="text-sm">As Shown</span>
    </div>
  </div>
</div>
{/* ================= CUSTOMIZE DRAWER ================= */}

{/* ================= COMPACT CUSTOMIZE DRAWER ================= */}
{activeCustomizer && (
  <div className="fixed inset-0 bg-white z-50 flex flex-col">

    {/* CLOSE */}
    <button
      onClick={() => setActiveCustomizer(null)}
      className="absolute top-4 right-6 text-2xl text-gray-500"
    >
      ✕
    </button>

    {/* HEADER */}
    <div className="text-center py-4 border-b">
      <h2 className="text-lg font-semibold">
        Customize your style with eShakti FX
      </h2>
      <p className="text-xs text-gray-500">
        Click on any box and see the style change!
      </p>
    </div>

    {/* BODY */}
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 py-6 overflow-hidden">

      {/* LEFT IMAGE (FIXED SIZE) */}
      <div className="flex justify-center items-start">
        <img
          src={mainImage}
          alt="Style Preview"
          className="max-h-[420px] max-w-[300px] object-contain"
        />
      </div>

      {/* RIGHT OPTIONS (SCROLLABLE ONLY IF NEEDED) */}
      <div className="overflow-y-auto pr-3 space-y-8 text-sm">

        {/* NECKLINE */}
        <div>
          <h3 className="font-semibold text-xs mb-1">NECKLINE</h3>
          <p className="text-[11px] text-gray-500 mb-3">
            Click to change Neckline
          </p>

          <div className="flex items-center gap-4">
            <div className="border border-red-400 w-16 h-20 flex items-center justify-center text-[10px] text-gray-400">
              DEFAULT
            </div>
            <div>
              <p className="text-sm font-medium">As Shown</p>
              <p className="text-xs text-gray-500">Halter neck</p>
            </div>
          </div>
        </div>

        {/* SLEEVE TYPE */}
        <div>
          <h3 className="font-semibold text-xs mb-1">SLEEVE TYPE</h3>
          <p className="text-[11px] text-gray-500 mb-3">
            Click to change Sleeve Type
          </p>

          <div className="flex items-center gap-4">
            <div className="border border-red-400 w-16 h-20 flex items-center justify-center text-[10px] text-gray-400">
              DEFAULT
            </div>
            <div>
              <p className="text-sm font-medium">As Shown</p>
              <p className="text-xs text-gray-500">
                Sleeveless, cut-away shoulders
              </p>
            </div>
          </div>
        </div>

        {/* LENGTH */}
        <div>
          <h3 className="font-semibold text-xs mb-1">LENGTH</h3>
          <p className="text-[11px] text-gray-500 mb-3">
            Click to change Length
          </p>

          <div className="flex items-start gap-4">

            {/* DEFAULT */}
            <div className="border border-red-400 w-16 h-20 flex items-center justify-center text-[10px] text-gray-400">
              DEFAULT
            </div>

            {/* SCROLLER */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
  {lengthOptions.map((opt) => (
    <div
      key={opt.label}
      onClick={() => {
        setSelectedLength(opt.label);
        setMainImage(opt.preview); // 👈 LEFT IMAGE CHANGE
      }}
      className={`min-w-[60px] text-center cursor-pointer ${
        selectedLength === opt.label
          ? "ring-2 ring-red-400 rounded"
          : ""
      }`}
    >
      <img
        src={opt.thumb}
        alt={opt.label}
        className="w-10 h-16 object-cover mx-auto mb-1"
      />
      <p className="text-[10px] text-gray-600 leading-tight">
        {opt.label}
      </p>
    </div>
  ))}
</div>

          </div>
        </div>

      </div>
    </div>

    {/* FOOTER (FIXED) */}
    <div className="border-t px-10 py-3 flex justify-between items-center">
      <p className="text-xs text-gray-600">
        Selected style options – As Shown, As Shown, As Shown
      </p>

      <div className="flex gap-3">
        <button className="px-5 py-2 border text-gray-400 text-sm cursor-not-allowed">
          Save Style
        </button>
        <button className="px-5 py-2 bg-red-500 text-white text-sm rounded">
          Select style & proceed
        </button>
      </div>
    </div>
  </div>
)}


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
          {/* Size Type Selection */}
<div>
  <h3 className="font-semibold mb-2">Select Size</h3>

  <div className="flex gap-6 mb-4">
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="sizeType"
        checked={sizeType === "standard"}
        onChange={() => setSizeType("standard")}
      />
      <span>Standard Size</span>
    </label>

    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="sizeType"
        checked={sizeType === "custom"}
        onChange={() => setSizeType("custom")}
      />
      <span>Custom Size</span>
    </label>
  </div>

  {/* ================= STANDARD SIZE (IMAGE 1) ================= */}
  {sizeType === "standard" && (
    <>
      <div className="flex gap-2 flex-wrap mb-4">
        {["0","2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32","34","36"].map((size) => (
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

      {/* Height */}
      <div>
        <h4 className="font-semibold mb-1">Your Height (feet & inches)</h4>
        <select className="border rounded px-3 py-2 w-1/2">
          <option>Select</option>
          <option>4'10"</option>
          <option>5'0"</option>
          <option>5'2"</option>
          <option>5'4"</option>
          <option>5'6"</option>
          <option>5'8"</option>
          <option>5'10"</option>
        </select>
      </div>
    </>
  )}

  {/* ================= CUSTOM SIZE (IMAGE 2) ================= */}
  {sizeType === "custom" && (
    <div className="grid grid-cols-2 gap-4">
      {[
        "Shoulder",
        "Chest",
        "Bust",
        "Under Bust",
        "Waist",
        "Hip",
        "Upper Arm",
      ].map((field) => (
        <div key={field}>
          <label className="text-sm font-medium">{field}</label>
          <select className="border rounded px-2 py-1 w-full">
            <option>Select</option>
            {Array.from({ length: 30 }, (_, i) => (
              <option key={i}>{i + 20}</option>
            ))}
          </select>
        </div>
      ))}

      {/* Optional measurements */}
      <div className="col-span-2 mt-3">
        <h4 className="font-semibold mb-1">Optional Measurements</h4>
      </div>

      {["HPS to Bust Point", "HPS to Waist", "HPS to Knee"].map((field) => (
        <div key={field}>
          <label className="text-sm font-medium">{field}</label>
          <select className="border rounded px-2 py-1 w-full">
            <option>Select</option>
            {Array.from({ length: 40 }, (_, i) => (
              <option key={i}>{i + 10}</option>
            ))}
          </select>
        </div>
      ))}

      {/* Height */}
      <div className="col-span-2">
        <h4 className="font-semibold mb-1">Your Height (feet & inches)</h4>
        <select className="border rounded px-3 py-2 w-1/2">
          <option>Select</option>
          <option>4'10"</option>
          <option>5'0"</option>
          <option>5'2"</option>
          <option>5'4"</option>
          <option>5'6"</option>
          <option>5'8"</option>
          <option>5'10"</option>
        </select>
      </div>
    </div>
  )}
</div>

          {/* <div>
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
          </div> */}

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
      {/* Customize Style Panel */}


    </div>
  );
}

// heello