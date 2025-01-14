import React from "react";
import image1 from "../../Assests/image1.png";
import image2 from "../../Assests/image2.png";
import image3 from "../../Assests/image3.png";
import image4 from "../../Assests/image4.png";
import imageDesktop from "../../Assests/imageDesktop.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto justify-between items-center h-screen px-6 lg:px-20 bg-gray-50">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-10 text-center lg:text-left">
        <span className="px-4 py-2 border border-transparent rounded-full bg-[#4935D914] text-[#4935D9] text-sm font-medium inline-block w-fit">
          Generate Unlimited Number of Bills for Free
        </span>
        <h1 className="font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
          Accurate, Fast, and Secure Bill Generator
        </h1>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Bill Generator lets you quickly create receipts, bills, and invoices
          with attractive templates straight from your web browser.
        </p>
        <button className="rounded-lg px-6 py-3 bg-[#4935D9] text-white font-semibold hover:bg-[#3728a6] transition-all duration-300 w-fit">
          Generate Bill Now
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
        <img src={imageDesktop} alt="" className="object-cover group-11" />
      </div>
    </div>
  );
};

export default Hero;
