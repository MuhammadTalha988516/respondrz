import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(null); // which menu is hovered

  return (
    <div className="bg-white flex items-center h-[100px] px-8 relative z-[2000]">
      {/* Left Logo */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Respondrz"
          className="w-[90px] h-auto cursor-pointer"
        />
      </div>

      {/* Desktop Nav Links */}
      <ul className="absolute left-1/2 transform -translate-x-1/2 font-semibold hidden md:flex space-x-8">
        <li>
          <Link to="/" className="text-[#F34434] cursor-pointer hover:underline">
            Home
          </Link>
        </li>

        <li
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          <Link
            to="/about"
            className="text-[#F34434] cursor-pointer hover:underline"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/partners"
            className="text-[#F34434] cursor-pointer hover:underline"
          >
            Partners
          </Link>
        </li>
        <li>
          <Link
            to="/impact"
            className="text-[#F34434] cursor-pointer hover:underline"
          >
            Impact
          </Link>
        </li>
        <li>
          <Link
            to="/gov-ngos"
            className="text-[#F34434] cursor-pointer hover:underline"
          >
            Gov & NGOs
          </Link>
        </li>

        <li
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          <Link
            to="/contact-us"
            className="text-[#F34434] cursor-pointer hover:underline"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* About Us Mega Menu */}
      {hovered === "about" && (
        <div
          className="fixed top-[100px] left-1/2 -translate-x-1/2 
                     w-[95vw] max-w-7xl h-auto max-h-[70vh] 
                     bg-white text-black shadow-2xl rounded-xl 
                     z-[3000] overflow-y-auto"
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: 3-line intro */}
            <div>
              <h3 className="font-bold mb-4">About Respondrz</h3>
              <ul className="text-sm leading-relaxed list-disc list-inside space-y-1 text-gray-700">
                <li>Rapid, life-saving emergency response</li>
                <li>Trusted networks of responders</li>
                <li>Compassionate care, every time</li>
              </ul>
            </div>

            {/* Middle column */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about/overview" className="hover:text-[#F34434]">Company Overview</Link></li>
                <li><Link to="/about/mission" className="hover:text-[#F34434]">Mission & Vision</Link></li>
                <li><Link to="/about/values" className="hover:text-[#F34434]">Core Values</Link></li>
                <li><Link to="/about/news" className="hover:text-[#F34434]">News & Updates</Link></li>
              </ul>
            </div>

            {/* Right column */}
            <div>
              <h3 className="font-bold mb-4">Explore More</h3>
              <ul className="space-y-2">
                <li><Link to="/about/team" className="hover:text-[#F34434]">Our Team</Link></li>
                <li><Link to="/about/careers" className="hover:text-[#F34434]">Careers</Link></li>
                <li><Link to="/about/partners" className="hover:text-[#F34434]">Partners</Link></li>
                <li><Link to="/about/contact" className="hover:text-[#F34434]">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Contact Us Mega Menu */}
      {hovered === "contact" && (
        <div
          className="fixed top-[100px] left-1/2 -translate-x-1/2 
                     w-[95vw] max-w-7xl h-auto max-h-[70vh] 
                     bg-white text-black shadow-2xl rounded-xl 
                     z-[3000] overflow-y-auto"
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column */}
            <div>
              <h3 className="font-bold mb-4">Get in Touch</h3>
              <p className="text-sm leading-relaxed">
                Reach out to us for emergency services, partnerships, or
                general inquiries. We're here 24/7.
              </p>
            </div>

            {/* Middle column */}
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li><Link to="/contact/phone" className="hover:text-[#F34434]">Phone Support</Link></li>
                <li><Link to="/contact/email" className="hover:text-[#F34434]">Email</Link></li>
                <li><Link to="/contact/office" className="hover:text-[#F34434]">Office Locations</Link></li>
                <li><Link to="/contact/help" className="hover:text-[#F34434]">Help Center</Link></li>
              </ul>
            </div>

            {/* Right column */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/contact/report" className="hover:text-[#F34434]">Report Emergency</Link></li>
                <li><Link to="/contact/feedback" className="hover:text-[#F34434]">Feedback</Link></li>
                <li><Link to="/contact/partners" className="hover:text-[#F34434]">Partner With Us</Link></li>
                <li><Link to="/contact/careers" className="hover:text-[#F34434]">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
