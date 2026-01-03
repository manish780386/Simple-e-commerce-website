import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");

    // Form fields reset
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10 mt-20">
      <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              className="w-full border border-gray-300 px-4 py-2 h-24 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
