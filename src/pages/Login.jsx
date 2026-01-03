import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      alert("Email is required!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }

    // demo login (backend ke bina)
    const user = {
      name: "",
      email: email,
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/"); // login ke baad home
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password (min 8 characters)"
            className="w-full px-4 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <Link
          to="/signup"
          className="text-blue-600 hover:underline mt-4 block text-center"
        >
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}
