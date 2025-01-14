import { useState } from "react";
import FuelBill from "../FuelBill/FuelBill";
import DriverSalary from "../DriverSalary/DriverSalary";
import DailyHelper from "../DailyHelper/DailyHelper";
import RentRecipt from "../RentRecipt/RentRecipt";
import BookInvoice from "../BookInvoice/BookInvoice";
import InternetInvoice from "../InternetInvoice/InternetInvoice";
import RestaurentBill from "../RestaurentBill/RestaurentBill";
import RechargeReceipt from "../RechargeReceipt/RechargeReceipt";
import ECommerceInvoice from "../eCommerceInvoice/eCommerceInvoice";
import MedicalBill from "../MedicalBill/MedicalBill";
import GeneralBill from "../GeneralBill/GeneralBill";
import StationaryBill from "../StationaryBill/StationaryBill";
import LTARecipt from "../LTARecipt/LTARecipt";
import HotelBill from "../HotelBill/HotelBill";
import GymBill from "../GymBill/GymBill";
import MartBill from "../MartBill/MartBill";
import CabBill from "../CabBill/CabBill";
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

const sections = [
  { name: "Fuel Bills", icon: <GasStation size="20" color="currentColor" /> },
  { name: "Driver Salary", icon: <Driving size="20" color="currentColor" /> },
  {
    name: "Daily Helper",
    icon: <ProfileCircle size="20" color="currentColor" />,
  },
  { name: "Rent Recipt", icon: <Building size="20" color="currentColor" /> },
  { name: "Book Invoice", icon: <Book size="20" color="currentColor" /> },
  { name: "Internet Invoice", icon: <Wifi size="20" color="currentColor" /> },
  { name: "Restaurent Bill", icon: <Reserve size="20" color="currentColor" /> },
  {
    name: "Recharge Receipt",
    icon: <MonitorMobbile size="20" color="currentColor" />,
  },
  {
    name: "E-Commerce Invoice",
    icon: <Personalcard size="20" color="currentColor" />,
  },
  { name: "Medical Bill", icon: <Hospital size="20" color="currentColor" /> },
  { name: "General Bill", icon: <Bill size="20" color="currentColor" /> },
  {
    name: "Stationary Bill",
    icon: <RulerPen size="20" color="currentColor" />,
  },
  {
    name: "LTA Recipt",
    icon: <AirplaneSquare size="20" color="currentColor" />,
  },
  { name: "Hotel Bill", icon: <UserSquare size="20" color="currentColor" /> },
  { name: "Gym Bill", icon: <Weight size="20" color="currentColor" /> },
  { name: "Mart Bill", icon: <Bag size="20" color="currentColor" /> },
  { name: "Cab Bill", icon: <Car size="20" color="currentColor" /> },
];

const renderComponent = (section) => {
  switch (section) {
    case "Fuel Bills":
      return <FuelBill />;
    case "Driver Salary":
      return <DriverSalary />;
    case "Daily Helper":
      return <DailyHelper />;
    case "Rent Recipt":
      return <RentRecipt />;
    case "Book Invoice":
      return <BookInvoice />;
    case "Internet Invoice":
      return <InternetInvoice />;
    case "Restaurent Bill":
      return <RestaurentBill />;
    case "Recharge Receipt":
      return <RechargeReceipt />;
    case "E-Commerce Invoice":
      return <ECommerceInvoice />;
    case "Medical Bill":
      return <MedicalBill />;
    case "General Bill":
      return <GeneralBill />;
    case "Stationary Bill":
      return <StationaryBill />;
    case "LTA Recipt":
      return <LTARecipt />;
    case "Hotel Bill":
      return <HotelBill />;
    case "Gym Bill":
      return <GymBill />;
    case "Mart Bill":
      return <MartBill />;
    case "Cab Bill":
      return <CabBill />;
    default:
      return <FuelBill />;
  }
};

const MainSection = () => {
  const [selectedSection, setSelectedSection] = useState("Fuel Bills");

  return (
    <div className="max-w-[83%] mx-auto p-6 rounded-lg space-y-8 mt-12">
      <h1 className="font-semibold text-lg">Which bill do you want to generate?</h1>
      {/* Section Selection */}
      <div className="flex flex-wrap gap-4">
        {sections.map(({ name, icon }, index) => (
          <button
            key={index}
            onClick={() => setSelectedSection(name)}
            className={`flex items-center space-x-2 text-sm px-4 py-3 border rounded-lg shadow-sm cursor-pointer transition-all ${
              selectedSection === name
                ? "bg-[#4935D9] text-white font-semibold shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {icon}
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* Render Selected Component */}
      <div className="template-preview rounded-lg shadow-sm">
        {renderComponent(selectedSection)}
      </div>
    </div>
  );
};

export default MainSection;
