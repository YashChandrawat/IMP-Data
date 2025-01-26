import { ArrowDown2, CloseSquare } from "iconsax-react";
import { useState } from "react";
import {
  AirplaneSquare,
  Bag,
  Bill,
  Book,
  Building,
  Car,
  Driving,
  GasStation,
  Hospital,
  MonitorMobbile,
  Personalcard,
  ProfileCircle,
  Reserve,
  RulerPen,
  UserSquare,
  Weight,
  Wifi,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ isMobile }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const items = [
    {
      label: "Fuel Bills",
      icon: <GasStation size="20" color="currentColor" />,
    },
    {
      label: "Driver Salary",
      icon: <Driving size="20" color="currentColor" />,
    },
    {
      label: "Daily Helper",
      icon: <ProfileCircle size="20" color="currentColor" />,
    },
    { label: "Rent Recipt", icon: <Building size="20" color="currentColor" /> },
    { label: "Book Invoice", icon: <Book size="20" color="currentColor" /> },
    {
      label: "Internet Invoice",
      icon: <Wifi size="20" color="currentColor" />,
    },
    {
      label: "Restaurant Bill",
      icon: <Reserve size="20" color="currentColor" />,
    },
    {
      label: "Recharge Receipt",
      icon: <MonitorMobbile size="20" color="currentColor" />,
    },
    {
      label: "E-Commerce Invoice",
      icon: <Personalcard size="20" color="currentColor" />,
    },
    {
      label: "Medical Bill",
      icon: <Hospital size="20" color="currentColor" />,
    },
    { label: "General Bill", icon: <Bill size="20" color="currentColor" /> },
    {
      label: "Stationary Bill",
      icon: <RulerPen size="20" color="currentColor" />,
    },
    {
      label: "LTA Recipt",
      icon: <AirplaneSquare size="20" color="currentColor" />,
    },
    {
      label: "Hotel Bill",
      icon: <UserSquare size="20" color="currentColor" />,
    },
    { label: "Gym Bill", icon: <Weight size="20" color="currentColor" /> },
    { label: "Mart Bill", icon: <Bag size="20" color="currentColor" /> },
    { label: "Cab Bill", icon: <Car size="20" color="currentColor" /> },
  ];

  const handleRoute = (label) => {
    const formattedLabel = label.toLowerCase().replace(/\s+/g, "-");
    navigate(`/bills/${formattedLabel}`);
  };

  return (
    <div
      className={`relative ${isMobile ? "block" : "inline-block"} text-left`}
    >
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 hover:text-[#4935D9] justify-between w-full"
        type="button"
      >
        <span>Bills</span>
        {isOpen ? (
          <ArrowDown2
            size="20"
            className="transition-transform duration-300 rotate-180"
          />
        ) : (
          <ArrowDown2
            size="20"
            className={`transition-transform duration-300 rotate-0
            }`}
          />
        )}
      </button>

      {/* Dropdown Menu with Transition */}
      <div
        className={`z-50 mt-2 ${
          isMobile ? "static w-full h-auto" : "absolute bg-white"
        } rounded-lg w-[250px] text-black transition-all duration-300 ease-in-out ${
          isOpen ? "h-[50vh] opacity-100" : "max-h-0 opacity-0"
        } overflow-scroll no-scrollbar`}
      >
        {isOpen && (
          <ul
            className={`text-sm text-gray-700  ${
              isMobile ? "flex flex-wrap" : ""
            } gap-2`}
            onMouseLeave={!isMobile ? closeDropdown : null}
          >
            {items.map((item, index) => (
              <li key={index}>
                <button
                  className={`${
                    isMobile
                      ? "w-auto flex flex-wrap gap-2 border"
                      : "w-[100%] flex gap-2"
                  }  rounded-lg shadow bg-white  items-center  px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#4935D9] dark:hover:text-white`}
                  onClick={() => handleRoute(item.label)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
