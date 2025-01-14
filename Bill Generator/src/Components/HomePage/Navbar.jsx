const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center rounded-xl px-6 py-4 bg-[#FFFFFF] text-black">
      {/* Left Section */}
      <section className="text-lg font-bold border-gray-200 border-2 px-8 py-2 rounded-xl mx-24">
        <h4>LOGO</h4>
      </section>

      {/* Middle Section */}
      <section className="hidden md:block mx-24">
        <ul className="flex space-x-16">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Bills</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </section>

      {/* Right Section */}
      {/* <div className="flex space-x-6">
        <button className=" text-black hover:border-gray-300 border-2 py-2 px-4 rounded-md">
          Login
        </button>
        <button className="bg-[#4935D9] hover:bg-[#5541e6] text-white py-2 px-4 rounded-md">
          Sign up
        </button>
      </div> */}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
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
  );
};

export default Navbar;
