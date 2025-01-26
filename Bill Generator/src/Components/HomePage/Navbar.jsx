import { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import { HiBars3, HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100 w-full flex justify-between items-center rounded-xl px-[5.5vw] py-4">
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
            className="focus:outline-none"
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 pl-6 bg-white" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "rgb(241, 245, 249)" }} // Tailwind's slate-100
      >
        <ul className="flex flex-col space-y-4 py-4 px-6">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="relative hover:text-gray-400 cursor-pointer">
            <Dropdown isMobile={true} /> {/* Pass isMobile prop */}
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
