import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClasses =
    "w-[140px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className=" mx-auto flex items-center justify-between flex-nowrap ">
        
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="logo"
            className="h-20 w-auto object-contain cursor-pointer ml-10"
          />
        </NavLink>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white ml-4 flex-shrink-0"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex sticky items-center flex-grow rounded-4xl ml-70">
          <ul className="flex bg-black/50 border border-red-500  text-white text-sm font-medium rounded-full overflow-hidden shadow-lg">
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
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partners"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/impact"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                Impact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button className="bg-orange-600 text-white px-6 py-[18px] font-semibold hover:bg-orange-700 cursor-pointer transition rounded-full">
            Get an Ambulance
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-2 py-4">
          <NavLink
            to="/"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            About
          </NavLink>
          <NavLink
            to="/partners"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Partners
          </NavLink>
          <NavLink
            to="/impact"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Impact
          </NavLink>
          <NavLink
            to="/contact-us"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Contact Us
          </NavLink>
          <button className="bg-orange-600 text-white px-6 py-3 font-semibold w-full hover:bg-orange-700">
            Get An Ambulance
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
