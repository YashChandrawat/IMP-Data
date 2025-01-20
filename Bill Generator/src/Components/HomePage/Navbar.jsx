import { useState } from "react";
import Dropdown from "./DropDown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" inline w-full">
      <div className=" mt-4 bg-gray-100 w-[95%] mx-auto flex justify-between items-center rounded-xl px-[5.5vw] py-4">
        {/* Left Section */}
        <section className="text-lg font-bold border-gray-200 border-2 px-8 py-2 rounded-xl">
          <h4>LOGO</h4>
        </section>

        {/* Middle Section */}
        <section className="hidden md:block">
          <ul className="flex space-x-16">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="relative hover:text-gray-400 cursor-pointer">
              <Dropdown />
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </section>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40`}
      >
        <ul className="flex flex-col space-y-4 py-4 px-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="relative hover:text-gray-400 cursor-pointer">
            <Dropdown />
          </li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
