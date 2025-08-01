import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Home/logo eco syst.png";
import logo2 from "../assets/Home/Frame 1618871548.png";
import { GoRocket } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsSidebarOpen, setIsProjectsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProjectsSidebar = () => {
    setIsProjectsSidebarOpen(!isProjectsSidebarOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // NavLink component for consistent styling
  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      className={`relative group px-[16px] py-[8px] text-[16px]   font-[400] leading-[26px] ${
        isActive(to)
          ? "text-primary font-[700]"
          : "text-base hover:text-primary duration-300"
      }`}
      onClick={onClick}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-3 h-[4px] bg-primary transition-all duration-300 ${
          isActive(to) ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );

  return (
    <nav className="bg-baseThree  fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-[1500px] mx-auto  px-4 py-1 gap-[32px] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="" className="" />
          </Link>

          <div className="hidden lg:flex items-center   space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/team">Our Team</NavLink>
          </div>

          {/* CTA Button - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative w-full md:w-[347px] h-[48px] inline-flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border  text-[16px] leading-[26px] rounded-[5px] text-base  border-primary hover:border-1 bg-primary hover:bg-[#fff] focus:outline-none transition-colors duration-300 "
            >
              <GoRocket size={24} />
              Lets Grow Your business
            </Link>
            <div className="p-3 border border-base rounded-full">
              <GrProjects
                size={20}
                className="cursor-pointer"
                onClick={toggleProjectsSidebar}
              />
            </div>
          </div>

          {/* Mobile menu button - shown on mobile and tablet */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-8 w-8 hidden" />
              ) : (
                <FiMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - shown when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20  "
              onClick={toggleMenu}
            />
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                duration: 0.4,
              }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-[1005]"
            >
              <div className="flex justify-end w-full px-4 pt-4">
                <button
                  onClick={toggleMenu}
                  className="text-3xl text-gray-700 hover:text-primary focus:outline-none transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col items-center w-full py-4">
                <div className="w-full flex flex-col items-center space-y-4">
                  <NavLink to="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                  <NavLink to="/services" onClick={toggleMenu}>
                    Services
                  </NavLink>
                  <NavLink to="/portfolio" onClick={toggleMenu}>
                    Portfolio
                  </NavLink>
                  <NavLink to="/team" onClick={toggleMenu}>
                    Our Team
                  </NavLink>
                </div>
                <div className="w-full px-4 pt-6">
                  <Link
                    to="/contact"
                    className="w-full md:w-[300px] h-[48px] flex justify-center gap-2 px-[16px] py-[8px] font-[700] border  text-[15px] leading-[26px] rounded-[8px] text-base border-primary hover:border-1 bg-primary hover:bg-[#fff] transition-colors duration-300 "
                  >
                    <GoRocket size={24} />
                    Lets Grow Your business
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Projects Sidebar */}
      <AnimatePresence>
        {isProjectsSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 z-[1000]"
              onClick={toggleProjectsSidebar}
            />
            {/* Projects Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                duration: 0.4,
              }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-md bg-white/90 shadow-xl z-[1001] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-end w-full px-4 pt-4">
                <button
                  onClick={toggleProjectsSidebar}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-base focus:outline-none transition-colors duration-200"
                  aria-label="Close sidebar"
                >
                  <FiX size={24}/>
                </button>
              </div>

              {/* Company Logo and Name */}
              <div className="flex flex-col items-center px-4 pb-6">
              <Link to="/">
            <img src={logo2} alt="" className="" />
          </Link>
              </div>

              {/* About Company Section */}
              <div className="px-4 pb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  About Company
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Promptech is a leading digital marketing agency in Egypt,
                  specializing in creating compelling content, outstanding
                  branding, and connecting clients to new markets. Our main goal
                  is to foster a digital environment that drives growth and
                  success for businesses of all sizes. We combine creativity
                  with strategic thinking to deliver results that exceed
                  expectations.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 px-4 pb-6">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                  <FaFacebook className="text-gray-700" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                  <FaTwitter className="text-gray-700" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                  <FaLinkedin className="text-gray-700" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                  <FaWhatsapp className="text-gray-700" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                  <FaYoutube className="text-gray-700" />
                </div>
              </div>

              {/* Get In Touch Section */}
              <div className="px-4 pb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Get In Touch
                </h3>
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="text-base mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    81 Mohammed Al Mokhtar Street, Cairo, Egypt
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
