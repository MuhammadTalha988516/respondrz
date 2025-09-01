import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.webp";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClasses =
    "w-[120px] sm:w-[140px] h-[44px] sm:h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black text-sm sm:text-base";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2">
        
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="logo"
            className="h-14 sm:h-20 w-auto object-contain cursor-pointer"
          />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white ml-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <ul className="flex bg-black/50 border border-red-500 text-white text-sm lg:text-base font-medium rounded-full overflow-hidden shadow-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-red-500 text-white" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-red-500 text-white" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partners"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-red-500 text-white" : ""}`
                }
              >
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/impact"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-red-500 text-white" : ""}`
                }
              >
                Impact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-red-500 text-white" : ""}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact-us"
            className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-[18px] font-semibold hover:bg-red-700 transition rounded-full text-sm sm:text-base"
          >
            Get an Ambulance
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[72px] sm:top-[90px] left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-1 sm:space-y-2 py-3 sm:py-4">
          <NavLink to="/" className="py-2 sm:py-3 w-full text-center hover:bg-red-600">
            Home
          </NavLink>
          <NavLink to="/about-us" className="py-2 sm:py-3 w-full text-center hover:bg-red-600">
            About
          </NavLink>
          <NavLink to="/partners" className="py-2 sm:py-3 w-full text-center hover:bg-red-600">
            Partners
          </NavLink>
          <NavLink to="/impact" className="py-2 sm:py-3 w-full text-center hover:bg-red-600">
            Impact
          </NavLink>
          <NavLink to="/contact-us" className="py-2 sm:py-3 w-full text-center hover:bg-red-600">
            Contact Us
          </NavLink>
          <Link
            to="/contact-us"
            className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold w-full text-center hover:bg-red-700"
          >
            Get An Ambulance
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
