import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Productdetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {

      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(response.data);
      console.log(response.data)


    }
    fetchProduct();
  }, []);

  const addToCart = () => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    oldCart.push(product);
    localStorage.setItem("cart", JSON.stringify(oldCart));
  };


  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center items-center">
      {product ? (

        <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center items-center">
          <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-3xl flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full md:w-1/2 h-96 object-cover rounded-xl"
            />
            {/* Product Details */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
              <p className="text-yellow-600 text-2xl font-semibold mb-6">₹ {product.price}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <Link to="/cart">
                <button
                  onClick={addToCart}
                  className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
                >
                  Add to Cart
                </button>

              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
