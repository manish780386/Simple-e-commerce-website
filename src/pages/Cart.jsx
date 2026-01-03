import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Remove item
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Order form state
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gali, setGali] = useState("");
  const [colony, setColony] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")); // Check if logged in
    if (!user) {
      // If not logged in, redirect to login page
      navigate("/login");
      return;
    }

    // Validate form fields
    if (!name || !mobile || !email || !gali || !colony || !city || !pincode) {
      alert("Please fill all fields!");
      return;
    }

    alert(`Order placed successfully!\nTotal: ₹${total}\nPayment: Cash on Delivery`);

    // Clear cart and form
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setName("");
    setMobile("");
    setEmail("");
    setGali("");
    setColony("");
    setCity("");
    setPincode("");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-15">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
         Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500">Add some products to see them here.</p>
        </div>
      ) : (
        <div className="space-y-10">

          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-xl p-4 flex gap-4"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-yellow-600 text-xl font-semibold">
                    ₹ {item.price}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Total Price: ₹ {total}
            </h2>
          </div>

          {/* Order Now Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Order Now
            </h2>

            <form onSubmit={handleOrder} className="space-y-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Gali / Street"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  value={gali}
                  onChange={(e) => setGali(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Colony / Area"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  value={colony}
                  onChange={(e) => setColony(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </div>

              {/* Payment Option */}
              <div className="mt-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Payment Method
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    checked
                    readOnly
                  />
                  <label htmlFor="cod" className="text-gray-700">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {/* Total & Place Order */}
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold mb-4">
                  Total Amount: ₹ {total}
                </p>
                <button
                  type="submit"
                  className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                >
                  Place Order
                </button>
              </div>

            </form>
          </div>

        </div>
      )}
    </div>
  );
}
