import { ArrowDown2 } from "iconsax-react";
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
const Dropdown = () => {
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
      label: "Restaurent Bill",
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

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onMouseEnter={toggleDropdown}
        className="flex items-center gap-2
        "
        type="button"
      >
        <span>Bills</span>
        <ArrowDown2 size="16" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-50 absolute h-96 overflow-y-scroll no-scrollbar mt-2 bg-white rounded-lg shadow w-56 text-black"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
            onMouseLeave={closeDropdown}
          >
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
