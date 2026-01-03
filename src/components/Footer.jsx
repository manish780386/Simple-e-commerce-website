import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center mt-10">
      <h1 className="text-2xl font-bold text-yellow-400">ApnaShop</h1>

      <p className="text-gray-400 mt-2">
        © {new Date().getFullYear()} ApnaShop. All Rights Reserved.
      </p>
      <p>
        Made by <span className="text-yellow-400 font-semibold">Manish D@nge</span>
      </p>
    </footer>
  );
}
