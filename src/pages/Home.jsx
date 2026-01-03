import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12 flex flex-col items-center mt-20">

      {/* Hero Image */}
      <div className="mb-10">
        <img 
          src={image} 
          alt="ApnaShop Logo" 
          className="w-48 h-48 object-contain animate-bounce"
        />
      </div>

      {/* ===== Hero Section ===== */}
      <div className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white p-10 rounded-3xl shadow-2xl max-w-2xl text-center mb-12 hover:scale-105 transform transition duration-500">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-yellow-500">ApnaShop</span>
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          Your one-stop shop for amazing products. Explore our latest items and enjoy smooth shopping.
        </p>
        <Link to="/products">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 hover:scale-105 transform transition duration-300 shadow-md">
            Shop Now
          </button>
        </Link>
      </div>

      {/* ===== Quick Info Section ===== */}
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl text-center hover:shadow-2xl transition duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ApnaShop?</h2>
        <p className="text-gray-700 mb-2 text-lg">✅ High quality products</p>
        <p className="text-gray-700 mb-2 text-lg">✅ Fast delivery</p>
        <p className="text-gray-700 text-lg">✅ Affordable prices</p>
      </div>

    </div>
  );
}
