import { useState } from "react";
import Logo from "../../assets/Logo.webp";

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
    <footer className="w-full bg-black text-white py-16 sm:py-20">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6">
        
        {/* Column 1: Logo + App Buttons */}
        <div className="flex flex-col gap-4 items-start">
          <img src={Logo} alt="Logo" className="w-28 sm:w-32" />
          <div className="flex flex-wrap gap-3">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on App Store"
                className="h-10 sm:h-12"
              />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </div>

        {/* Column 3: Subscribe */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Subscribe</h2>
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black px-3 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-[200px] focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#F34434] px-5 py-2 mt-2 sm:mt-0 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </div>
          {message && <p className="text-sm">{message}</p>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs sm:text-sm text-white px-4">
        © 2025 Respondrz - All rights reserved |{" "}
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
