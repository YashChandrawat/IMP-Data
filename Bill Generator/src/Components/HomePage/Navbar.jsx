import { useState } from "react";
import Dropdown from "./DropDown";
import { HiBars3, HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="inline w-full">
      <div className="bg-gray-100 w-full mx-auto flex justify-between items-center rounded-xl px-[5.5vw] box-border py-4">
        {/* Left Section */}
        <section className="text-lg font-bold border-gray-200 border-2 px-8 py-2 rounded-xl">
          <h4>LOGO</h4>
        </section>

        {/* Middle Section */}
        <section className="hidden md:block">
          <ul className="flex space-x-16">
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="relative hover:text-gray-400 cursor-pointer">
              <Dropdown />
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </section>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <HiBars3BottomRight className="text-black size-6" />
            ) : (
              <HiBars3 className="text-black size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out absolute top-20 left-0 w-full bg-slate-100 shadow-lg z-40`}
      >
        <ul className="flex flex-col space-y-4 py-4 px-12">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="relative hover:text-gray-400 cursor-pointer">
            <Dropdown />
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
