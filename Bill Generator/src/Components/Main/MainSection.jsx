import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const renderComponent = (billType) => {
  switch (billType) {
    case "fuel-bills":
      return <FuelBill />;
    case "driver-salary":
      return <DriverSalary />;
    case "daily-helper":
      return <DailyHelper />;
    case "rent-recipt":
      return <RentRecipt />;
    case "book-invoice":
      return <BookInvoice />;
    case "internet-invoice":
      return <InternetInvoice />;
    case "restaurent-bill":
      return <RestaurentBill />;
    case "recharge-receipt":
      return <RechargeReceipt />;
    case "e-commerce-invoice":
      return <ECommerceInvoice />;
    case "medical-bill":
      return <MedicalBill />;
    case "general-bill":
      return <GeneralBill />;
    case "stationary-bill":
      return <StationaryBill />;
    case "lta-recipt":
      return <LTARecipt />;
    case "hotel-bill":
      return <HotelBill />;
    case "gym-bill":
      return <GymBill />;
    case "mart-bill":
      return <MartBill />;
    case "cab-bill":
      return <CabBill />;
    default:
      return <FuelBill />;
  }
};

const MainSection = () => {
  const { billType } = useParams();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("fuel-bills");

  const handleSectionChange = (name) => {
    const formattedLabel = name.toLowerCase().replace(/\s+/g, "-");
    setSelectedSection(formattedLabel);
    navigate(`/bills/${formattedLabel}`); // Use an absolute path here
  };

  return (
    <div className="max-w-[91%] mx-auto p-4 md:p-6 rounded-lg space-y-8 mt-12">
      <h1 className="font-semibold text-lg md:text-xl text-left md:text-left">
        Which bill do you want to generate?
      </h1>

      {/* Section Selection */}
      <div className="flex flex-wrap gap-4">
        {sections.map(({ name, icon }, index) => (
          <button
            key={index}
            onClick={() => handleSectionChange(name)}
            className={`flex items-center space-x-2 text-sm lg:px-4 px-2 sm:px-2 py-3 border rounded-lg shadow-sm cursor-pointer transition-all ${
              billType === name.toLowerCase().replace(/\s+/g, "-")
                ? "bg-[#4935D9] text-white font-semibold shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {icon}
            <span className="truncate">{name}</span>
          </button>
        ))}
      </div>

      {/* Render Selected Component */}
      <div className="template-preview rounded-lg w-full">
        {renderComponent(billType)}
      </div>
    </div>
  );
};

export default MainSection;
