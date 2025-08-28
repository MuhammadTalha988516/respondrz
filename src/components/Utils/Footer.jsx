import { useState } from "react";
import Logo from "../../assets/Logo.png";
import buttons from "../../assets/appbuttons.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      setEmail(""); // clear field
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <footer className="w-full h-[60vh] bg-black text-white py-20">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        
        {/* Column 1: Logo + Buttons */}
        <div className="flex flex-col gap-4 items-start">
          <img src={Logo} alt="Logo" className="w-32" />
          <img src={buttons} alt="App Buttons" className="w-40" />
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Column 3: Subscribe */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Subscribe</h2>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black px-3 py-2 rounded-l-md w-[200px] focus:outline-none"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-[#F34434] px-5 py-2 rounded-r-md hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </div>
          {message && <p className="text-sm">{message}</p>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-white">
        © 2025 Respondrz - All rights reserved | <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
