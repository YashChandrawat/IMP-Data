import { useState } from "react";
import { ArrowDown2 } from "iconsax-react";

const Heading = ({ name, toggleContent, isCollapsed, isVisible }) => {
  return (
    <h3
      className={`flex justify-between text-lg px-6 font-semibold ${
        isVisible ? "border-b-2 border-gray-200" : ""
      } py-4 text-gray-800  cursor-pointer`}
    >
      <span>{name}</span>
      <span
        className={`transition-transform duration-300 ${
          isCollapsed ? "rotate-180" : ""
        }`}
        onClick={toggleContent}
      >
        <ArrowDown2 size="32" color="black" />
      </span>
    </h3>
  );
};

export default Heading;
