import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import image from "../assets/image.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="w-full bg-black text-white fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img className="w-12 h-12 rounded-full object-cover" src={image} alt="Logo" />
          <Link to="/"><h1 className="text-3xl font-extrabold text-yellow-400">ApnaShop</h1></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-lg">
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="/">Home</Link>
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="/products">Products</Link>
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="/cart">Cart</Link>
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="/contact">Contact</Link>

          {!user ? (
            <Link
              className="border border-yellow-400 rounded-lg px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
              to="/login"
            >
              Create Account
            </Link>
          ) : (
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transform transition"
              >
                <User className="text-black" />
              </div>

              {open && (
                <div className="absolute right-0 mt-3 bg-white text-black rounded-xl shadow-xl p-4 w-64 animate-fadeIn">
                  <p className="font-semibold text-lg">{user.name || "User"}</p>
                  <p className="text-sm text-gray-600 truncate">{user.email}</p>

                  <hr className="my-3 border-gray-300" />

                  <button
                    onClick={handleLogout}
                    className="w-full text-red-500 font-medium hover:bg-red-100 py-2 rounded-lg transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <Link className="block hover:text-yellow-400 transition" to="/">Home</Link>
          <Link className="block hover:text-yellow-400 transition" to="/products">Products</Link>
          <Link className="block hover:text-yellow-400 transition" to="/cart">Cart</Link>
          <Link className="block hover:text-yellow-400 transition" to="/contact">Contact</Link>

          {!user ? (
            <Link
              className="block border border-yellow-400 rounded-lg px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
              to="/login"
            >
              Create Account
            </Link>
          ) : (
            <div className="border-t border-gray-700 pt-2">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-400 truncate">{user.email}</p>
              <button
                onClick={handleLogout}
                className="mt-2 w-full text-red-500 hover:bg-red-600 hover:text-white py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
