import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    async function getdata() {
      try {
        setLoading(true); // loading start
        let res = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // loading end
      }
    }
    getdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-15">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      {/* Loading message */}
      {loading ? (
        <p className="text-center text-gray-600 text-xl">Loading products...</p>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src={e.images[0]}
                alt={e.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800 mb-2">{e.title}</h2>

              {/* Price */}
              <p className="text-yellow-600 text-xl font-semibold">₹ {e.price}</p>

              {/* Button */}
              <Link to={`/productsdeatils/${e.id}`}>
                <button className="w-full mt-4 bg-yellow-500 text-black py-2 rounded-xl font-semibold hover:bg-yellow-600 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
