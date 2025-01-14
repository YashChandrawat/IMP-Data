import React from "react";
import heroImage from "../../Assests/HeroImage.png";
import nextImage from "../../Assests/nextImage.png";

const Hero = () => {
  return (
    <div className="flex flex-col px-[8vw] box-border w-screen relative overflow-x-hidden">
      {/* Hero section */}
      <div className="flex flex-col justify-between items-start h-screen py-24 relative">
        <div className="flex items-start justify-between relative">
          <div className="w-[701px] h-[701px] rounded-full bg-[#FFE3EC] blur-[250px] z-10 opacity-60 absolute left-0 top-0"></div>
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-10 text-center lg:text-left relative z-50">
            <span className="px-4 py-2 border border-transparent rounded-full bg-[#4935D914] text-[#4935D9] text-sm font-medium inline-block w-fit">
              Generate Unlimited Number of Bills for Free
            </span>
            <h1 className="font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
              Accurate, Fast, and Secure Bill Generator
            </h1>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Bill Generator lets you quickly create receipts, bills, and
              invoices with attractive templates straight from your web browser.
            </p>
            <button className="rounded-lg px-6 py-3 bg-[#4935D9] text-white font-semibold hover:bg-[#3728a6] transition-all duration-300 w-fit">
              Generate Bill Now
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 h-full">
            <img
              src={heroImage}
              alt=""
              className="object-cover group-11 relative z-50"
            />
          </div>
        </div>

        {/* guidance */}
        <div className="flex items-center flex-col gap-6 w-full">
          <h4>Generate Bills for</h4>
          <div className="flex items-center justify-between w-full">
            <span>Book Invoice</span>
            <span>Book Invoice</span>
            <span>Book Invoice</span>
            <span>Book Invoice</span>
          </div>
        </div>

        {/* ellipse */}
        <div className="w-[671px] h-[671px] rounded-full bg-[#96ACFF] blur-[250px] z-10 opacity-60 absolute -bottom-24 right-0"></div>
        {/* ellipse */}
        <div className="w-[671px] h-[671px] rounded-full bg-[#96ACFF] blur-[250px] z-10 opacity-50 absolute -bottom-20 right-0"></div>
      </div>

      {/* Other section */}
      <div className="flex flex-col justify-between items-start h-screen py-24 ">
        <h2>our satisfied clients</h2>

        <img src={nextImage} alt="" className="absolute left-[8vw] w-full" />
      </div>
    </div>
  );
};

export default Hero;
