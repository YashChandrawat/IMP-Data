import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
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

const Carousel = () => {
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
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
      label: "Recharge Bill",
      icon: <MonitorMobbile size="20" color="currentColor" />,
    },
    {
      label: "E-Comm Invoice",
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

  // Function to generate navigation paths
  const getPath = (label) => {
    if (label === "E-Com Invoice") return "bills/e-commerce-invoice";
    if (label === "Recharge") return "bills/recharge-receipt";
    return `bills/${label.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-4">
            {" "}
            {/* Added padding for spacing */}
            <button
              onClick={() => navigate(getPath(item.label))}
              className="flex items-center justify-center gap-2 text-sm sm:text-base font-base rounded-lg bg-[#F8F3FC66] 
                hover:bg-[#4935D9] hover:text-white shadow-lg transition-all duration-300 py-2 px-4 w-full"
              aria-label={item.label}
            >
              <p>{item.icon}</p>
              <span>{item.label}</span>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
